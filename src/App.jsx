import React from 'react'
import './App.css'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import Token from './pages/Register/token.jsx'
// import ToastBtn from './pages/Register/ToastBtn.jsx'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/token" element={<Token />} />
        {/* <Route path="/toast" element={<ToastBtn />} /> */}
      </Routes>


    </div>
  )
}

export default App;
