import React from 'react'
import './App.css'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>


    </div>
  )
}

export default App;
