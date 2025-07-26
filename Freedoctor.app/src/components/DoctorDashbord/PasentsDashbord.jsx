import React from 'react';

const PatientsDashboard = () => {
  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Your Appointments</h2>
          <p>Next: 22nd July, 10:00 AM</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Prescriptions</h2>
          <p>3 active</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Doctor Messages</h2>
          <p>No new messages</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Health Records</h2>
          <p>Last updated: 15th July</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsDashboard;
