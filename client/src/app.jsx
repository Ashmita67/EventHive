// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/events" element={
          <ProtectedRoute><Events /></ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;