import React from 'react'
import './App.css'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import Token from './pages/Register/token.jsx'
import CountryFlag from './component/CountryFlag.jsx'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/token" element={<Token />} />
        <Route path="/flag" element={<CountryFlag />} />
      </Routes>


    </div>
  )
}

export default App;
