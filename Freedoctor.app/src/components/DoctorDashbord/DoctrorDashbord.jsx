import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment"; // to check today’s date

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/appointment");
        setAppointments(res.data);
      } catch (err) {
        console.error("Failed to fetch appointments:", err);
      }
    };

    fetchAppointments();
  }, []);

  // Unique patients by phone number
  const totalPatients = new Set(appointments.map((a) => a.phoneNo)).size;

  // Appointments for today
  const today = moment().format("YYYY-MM-DD");
  const todayAppointments = appointments.filter((a) => a.date === today);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Doctor Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">👨‍⚕️ Total Patients</h2>
          <p className="text-3xl font-bold text-green-600">{totalPatients}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">📅 Today’s Appointments</h2>
          <p className="text-3xl font-bold text-blue-600">{todayAppointments.length}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">📨 Messages</h2>
          <p className="text-3xl font-bold text-red-500">3 Unread</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
