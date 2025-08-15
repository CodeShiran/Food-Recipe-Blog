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
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://food-recipe-blog-liard.vercel.app'] 
    : ['http://localhost:5173'],
  credentials: true
}));
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectdb()

app.get('/', (req, res) => {
  res.json({ 
    message: "API is working!", 
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  })
})

// API routes
app.use('/api/ai-chat', aiRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postsRouter)
app.use('/api/recipes', recipeRouter)
app.use('/api/email', emailRouter)


// For local development only
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

// Export for Vercel
export default app