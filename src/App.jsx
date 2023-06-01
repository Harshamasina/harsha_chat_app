import { Navigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
