import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import bgImage from "../../Assets/10056.jpg"; // Make sure this path is correct

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    number: "",
    Dob: "",
    role: "patient",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", formData);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. " + (err.response?.data?.message || ""));
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
        <h2 className="text-2xl font-bold text-blue-800">Register</h2>

        {/* Role Selection */}
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
          name="number"
          type="tel"
          pattern="[0-9]{10}"
          maxLength="10"
          value={formData.number}
          onChange={handleChange}
          placeholder="Enter your phone number"
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
          Register
        </button>

        <p className="text-sm text-gray-700 text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-blue-700 hover:underline">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;


