import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App