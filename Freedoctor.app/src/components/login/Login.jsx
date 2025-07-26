import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import bgImage from "../../Assets/10056.jpg";
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({ username: "", Dob: "", role: "patient" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevent page reload
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      const { token, role, userId } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);

      toast.success('Successfully toasted!')
      alert("Login successful");

      if (role === "doctor") navigate("/doctor-dashboard");
      else if (role === "patient") navigate("/patient-dashboard");

    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-cover bg-center h-screen w-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur border p-8 rounded-xl shadow-lg w-80 space-y-4 flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-blue-800">Login</h2>

        {/* Role Toggle */}
        <div className="flex gap-4 mb-2">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="role"
              value="patient"
              checked={formData.role === "patient"}
              onChange={handleChange}
            />
            <span>Patient</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="role"
              value="doctor"
              checked={formData.role === "doctor"}
              onChange={handleChange}
            />
            <span>Doctor</span>
          </label>
        </div>

        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full px-4 py-2 border rounded focus:outline-blue-500"
          required
        />

        <input
          name="Dob"
          type="date"
          value={formData.Dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          className="w-full px-4 py-2 border rounded focus:outline-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-gray-700 text-center">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-blue-700 hover:underline">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
