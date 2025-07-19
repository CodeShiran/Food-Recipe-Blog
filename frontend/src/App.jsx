import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}

export default App