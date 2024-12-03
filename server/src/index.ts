require('dotenv').config()
import express from 'express'
import { msgLog } from './utils/logger'

// All router import 
import authRouter from './routes/authRoute'

// Main app
const app = express()

// Define all const
const port = process.env.PORT || 1500

// Define external middleware
app.use(express.json())

// Define router middleware
app.use('/api/v1', authRouter)

app.listen(port, () => {
    msgLog(`Server listen on port: ${port} \n---------------------------------------- \n --> Link: http://localhost:${port}`)
})