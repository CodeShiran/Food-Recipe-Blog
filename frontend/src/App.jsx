import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}

export default App