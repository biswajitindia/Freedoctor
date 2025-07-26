import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiUser, FiPhone, FiCalendar, FiClock, FiMessageSquare } from "react-icons/fi";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/appointment");
        setAppointments(res.data);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Appointment List</h2>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FiUser className="text-blue-600" /> {appointment.username}
              </h3>
              <p className="text-gray-600 flex items-center gap-2 mb-2">
                <FiPhone className="text-green-600" /> {appointment.phoneNo}
              </p>
              <p className="text-gray-600 flex items-center gap-2 mb-2">
                <FiCalendar className="text-purple-600" /> {appointment.date}
              </p>
              <p className="text-gray-600 flex items-center gap-2 mb-2">
                <FiClock className="text-yellow-500" /> {appointment.time}
              </p>
              <p className="text-gray-600 flex items-center gap-2">
                <FiMessageSquare className="text-gray-700" /> {appointment.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
