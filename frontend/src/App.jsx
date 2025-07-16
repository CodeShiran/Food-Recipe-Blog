import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <RecipeDetails />
    </div>
  )
}

export default App