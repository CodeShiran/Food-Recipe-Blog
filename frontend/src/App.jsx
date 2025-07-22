import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Footer from './components/Footer'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes, Route, useLocation } from 'react-router-dom'
import Recipes from './pages/Recipes'
import AiChat from './pages/AiChat'
import Login from './pages/Login'

const App = () => {
  const location = useLocation();
  const isAiChat = location.pathname === '/ai-chat';
  const isLogin = location.pathname === '/login';
  return (
    <div>
      {!isAiChat && !isLogin && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogList />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
        <Route path='/ai-chat' element={<AiChat />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {!isAiChat && !isLogin && <Footer />}
    </div>
  )
}

export default App