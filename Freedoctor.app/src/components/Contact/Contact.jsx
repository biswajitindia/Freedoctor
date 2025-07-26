import React from "react";
import {
  FiMessageSquare,
  FiPhoneCall,
  FiVideo,
  FiFileText,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import advice from "../../Assets/advice.jpg";

const Contact = () => {
  // Get user role from localStorage
  const role = localStorage.getItem("role");

  const cards = [
    {
      title: "Chat with Doctor",
      icon: <FiMessageSquare className="text-4xl text-blue-600" />,
      buttonText: "Start Chat",
      link: "/chat",
    },
    {
      title: "Call Doctor",
      icon: <FiPhoneCall className="text-4xl text-green-600" />,
      buttonText: "Call Now",
      link: "/call",
    },
    {
      title: "Video Call Doctor",
      icon: <FiVideo className="text-4xl text-purple-600" />,
      buttonText: "Start Video Call",
      // ✅ Dynamic route based on role
      link: role === "Doctor" ? "/doctor/video" : "/patient/video",
    },
    {
      title: "Appointment Letter",
      icon: <FiFileText className="text-4xl text-gray-600" />,
      buttonText: "View Letter",
      link: "/appointment",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center h-screen w-full bg-gray-100 py-10 px-6 flex flex-col items-center justify-center gap-20"
      style={{ backgroundImage: `url(${advice})` }}
    >
      <h1 className="text-3xl font-bold text-center mb-10">Contact Options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white h-40 w-80 p-6 rounded-2xl shadow-md flex flex-col items-center text-center transition hover:shadow-xl justify-evenly opacity-90 hover:opacity-100"
          >
            {card.icon}
            <h2 className="text-xl font-semibold mt-4 mb-2">{card.title}</h2>
            <NavLink to={card.link}>
              <button className="mt-auto w-40 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                {card.buttonText}
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
