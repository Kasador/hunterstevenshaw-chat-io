// https://stackoverflow.com/questions/69099763/referenceerror-require-is-not-defined-in-es-module-scope-you-can-use-import-in
// https://www.npmjs.com/package/lru-cache
// https://www.npmjs.com/package/jsonwebtoken

import { config } from 'dotenv'
import express from 'express'
import cors from 'cors'
import routeHandler from './routes/index.js'
import connectDB from './db/dbConfig.js'
import { Server } from 'socket.io'
import { createServer } from "http";
config()
// const cors = require('cors')
// const routeHandler = require('./routes');
const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { 
    origin: '*',
    methods: ['GET', 'POST']
  }
})

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected.`)
  
  socket.on('disconnect', () => console.log('User disconnected'));
});

httpServer.listen(3500, () => {
  console.log(`Socket.io listening on port 3500`)
})

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.status(200).json({sucess: true, message: 'API is up and running...'})
});


app.use('/api', routeHandler)

void connectDB()
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

export default app