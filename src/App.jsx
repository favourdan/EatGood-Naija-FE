import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResetPassword from "./components/homepage/ResetPassword";
import Modal from "./ui/Modal";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Token from "./pages/Register/token.jsx";
import ResetEmail from "./components/homepage/ResetEmail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/token" element={<Token />} />
        <Route path="/reset-email" element={<ResetEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
