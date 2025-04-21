// https://www.mongodb.com/community/forums/t/mongodb-localhost-connection/15307
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        let dbURI = process.env.DATABASE_URL

        const conn = await mongoose.connect(dbURI)
        console.log(`Connected to MongoDB successfully: ${conn.connection.host}.`)
    } catch (error) {
        console.error("Error connecting to the database: ", error)
    }
}

export default connectDB

// const conSuccess = mongoose.connection
// conSuccess.once('open', _ => {
//   console.log('Database connected:', db)
// })