import Users from '../models/Users.js'

export const getAllUsers = async (req, res) => { // /api/users endpoint
    try {
        const data = await Users.find({}) // pull back all data from schema 

        if (!data) { // check does not currently work. Still returns status of 200 even if the database has no data.
            return res.status(404).json({ // 404 not found
                success: false,
                message: 'Not users found.'
            })
        }

        res.status(200).json({ // 200 success
            success: true,
            data,
            message: `Request made from: ${req.method} - /api/users endpoint`
        })
    } catch (error) {
        console.log('Oh no! Something went wrong. ', error)
        res.status(500).json(error) // 500 internal server error
    }
}