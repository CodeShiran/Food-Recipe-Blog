import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

const App = () => {
  return (
    <div>
      <Navbar />
      <BlogPost />
      <Footer />
    </div>
  )
}

export default App