import React, { useEffect, useState } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/api/doctors"); // Adjust if your backend runs elsewhere
        setDoctors(res.data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Specialists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div key={doc.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105">
            <img src={doc.image} alt={doc.name} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-700">{doc.name}</h2>
              <p className="text-gray-600">{doc.specialization}</p>
              <p className="text-sm mt-1">🧠 {doc.experience}</p>
              <p className="text-sm">📍 {doc.location}</p>
              <p className="text-sm">📅 Available: {doc.availability.join(", ")}</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
