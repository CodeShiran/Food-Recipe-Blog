import express from 'express'
import connectdb from './config/db.js'
import aiRouter from './routes/ai.route.js'
import userRouter from './routes/user.route.js'
import postsRouter from './routes/posts.route.js'


const app = express()

app.use(express.json())


app.listen(3000, () => {
    connectdb()
    console.log('Server is running on port 3000')
})

app.use('/api', aiRouter)
app.use('/api/user', userRouter)
app.use('/api/posts', postsRouter)

