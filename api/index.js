// https://stackoverflow.com/questions/69099763/referenceerror-require-is-not-defined-in-es-module-scope-you-can-use-import-in

import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import routeHandler from './routes/index.js'
import connectDB from './db/dbConfig.js'
config()
// const cors = require('cors')
// const routeHandler = require('./routes');

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.status(200).json({sucess: true, message: 'API is up and running...'})
});

app.use('/api', routeHandler)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

export default app