import express from 'express'
import connectdb from './config/db.js'
import aiRouter from './routes/ai.route.js'
import userRouter from './routes/user.route.js'
import postsRouter from './routes/posts.route.js'
import recipeRouter from './routes/recipe.route.js'
import emailRouter from './routes/email.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


app.listen(3000, () => {
    connectdb()
    console.log('Server is running on port 3000')
})

app.use('/api', aiRouter)
app.use('/api/user', userRouter)
app.use('/api/posts', postsRouter)
app.use('/api/recipe', recipeRouter)
app.use('/api/email', emailRouter)

