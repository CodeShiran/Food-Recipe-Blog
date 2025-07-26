import express from 'express'
import connectdb from './config/db.js'

const app = express()

app.use(express.json())


app.listen(3000, () => {
    connectdb()
    console.log('Server is running on port 3000')
})

