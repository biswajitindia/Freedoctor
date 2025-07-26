import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dashboardLink, setDashboardLink] = useState("/login"); // default

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(auth);

    const role = localStorage.getItem("role");
    if (auth && role === "doctor") {
      setDashboardLink("/doctor-dashboard");
    } else if (auth && role === "patient") {
      setDashboardLink("/patient-dashboard");
    } else {
      setDashboardLink("/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center h-16 px-6 py-4 shadow-md bg-[rgb(9,43,68)] sticky top-0 z-50">
      <div className="w-50 h-full flex items-center justify-center">
        <img
          width="62"
          height="61"
          src="https://yourdoctors.online/wp-content/uploads/2021/09/logo_orange.svg"
          alt="online doctor logo"
        />
      </div>

      {/* Desktop Nav */}
      <div className="md:flex hidden items-center space-x-6 text-white">
        <nav className="space-x-6  w-200 text-white flex justify-evenly ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Departments</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/SymptomForm">Test AI</Link>
          <Link to={dashboardLink}>Dashboard</Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-blue-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded">
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <FiX size={28} /> : <FiAlignJustify size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/doctors" onClick={() => setMenuOpen(false)}>Departments</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to={dashboardLink} onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
