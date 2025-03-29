import React from 'react'
<<<<<<< HEAD

const App = () => {
  return (
    <div className='bg-amber-300 h-screen w-full'>
 ggg
    </div>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
 

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/chat' element={ChatPage}/> 
    </Routes>
    </BrowserRouter>
>>>>>>> dd3edc9bfebbdf384945cb415ba50bb5df09de66
  )
}

export default App
