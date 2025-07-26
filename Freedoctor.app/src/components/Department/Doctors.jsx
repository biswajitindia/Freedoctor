import React, { useEffect, useState } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/api/doctors");
        setDoctors(res.data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Our Specialists</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doc) => (
          <div
            key={doc._id}
            className="flex bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 object-cover"
            />
            <div className="p-4 flex-1">
              <h2 className="text-lg font-bold text-blue-700">{doc.name}</h2>
              <p className="text-gray-600">{doc.specialization}</p>
              <p className="text-sm text-gray-700">🧠 {doc.experience}</p>
              <p className="text-sm text-gray-700">📍 {doc.location}</p>
              <p className="text-sm text-gray-700">📅 {doc.availability.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
