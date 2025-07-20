import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App