// src/components/Navbar.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h2 className="font-bold">EventHive</h2>

      <div className="space-x-4">
        {user && (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/events">Events</Link>
            <Link to="/my">My QR</Link>
            <Link to="/certificates">Certificates</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;