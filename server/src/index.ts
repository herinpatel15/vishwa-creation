require('dotenv').config()
import express from 'express'
import cors from 'cors'
import { msgLog } from './utils/logger'

// All router import 
import authRouter from './routes/authRoute'
import { dbConnection } from './utils/db/dbConnection'
import { port } from './utils/envVariables'

// Main app
const app = express()

// Define all const


// database connection
const dbConn = dbConnection()
if(!dbConn) {
    throw new Error('db connection fail!!')
} else {
    msgLog('db connection done...')
}

// Define external middleware
app.use(express.json())
app.use(cors())

// Define router middleware
app.use('/api/v1', authRouter)

app.listen(port, () => {
    msgLog(`Server listen on port: ${port} \n---------------------------------------- \n --> Link: http://localhost:${port}`)
})