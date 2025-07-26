import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNo: "",
    date: "",
    time: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/appointment", formData);
      setFormData({ username: "", phoneNo: "", date: "", time: "", message: "" });
      toast.success("Appointment booked successfully");
      navigate("/");
    } catch (err) {
      // alert(err.response?.data?.message || "Booking failed");
      toast.error("Booking failed");
      console.log(err);
      
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-cover bg-center h-screen w-full">
      <h2 className="text-3xl font-bold mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="w-150 h-100 border rounded-lg flex flex-col justify-evenly items-center">
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={formData.username}
          onChange={handleChange}
          className="w-[70%] mb-4 p-2 border rounded"
        />
        <input
          type="text"
          name="phoneNo"
          placeholder="Phone Number"
          value={formData.phoneNo}
          onChange={handleChange}
          className="w-[70%] mb-4 p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-[70%] mb-4 p-2 border rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-[70%] mb-4 p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-[70%] mb-4 p-2 border h-24"
        />
        <button type="submit" className=" w-[70%] bg-blue-600 text-white px-4 py-2 rounded">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
