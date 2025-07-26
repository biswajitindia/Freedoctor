import React from "react";
import { FiCalendar, FiClock, FiPhoneCall } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import bgImage from "../../Assets/bgImage.jpg"; // adjust the path if needed
import docter from "../../Assets/docter.png"; // adjust the path if needed


const Home = () => {
  const cardInfo = [
    {
      icon: <FiPhoneCall className="h-8 w-8 mx-auto text-blue-600" />,
      title: "1-800-600-380",
      subtitle: "Emergency Service",
      text: "Get instant help, call now!",
      button: {
        label: "See More",
        className: "mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition",
        link: null,
      },
    },
    {
      icon: <FiCalendar className="h-8 w-8 mx-auto text-blue-600" />,
      title: "Make an Appointment",
      subtitle: "Choose a time that suits you",
      button: {
        label: "Book Now",
        className: "mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition",
        link: "/AppointmentForm",
      },
    },
    {
      icon: <FiClock className="h-8 w-8 text-blue-600 m-8" />,
      title: "Opening Hours",
      subtitle: "Mon - Fri: 9 AM - 6 PM",
      text: "Sat - Sun: 10 AM - 4 PM",
      button: {
        label: "Contact Us",
        className: "bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition",
        link: null,
      },
    },
  ];


  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center h-screen w-full">

      {/* Hero Section */}
      <section className=" flex flex-col md:flex-row items-center justify-evenly px-8 py-12 bg-transparent">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={docter} // Replace with actual image path
            alt="Doctor"
            className="w-full max-w-md object-cover"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-white leading-tight mb-4">
            Proffesional Family Health Care
          </h1>

          <p className="text-white mb-6">Create your medical website using Jevelin </p>
          <div className="flex space-x-4 justify-center gap-3 md:justify-start">
            <div className="bg-green-100 p-3 rounded-full text-2xl text-green-600 font-bold">❤️</div>
            <div className="bg-green-100 p-3 rounded-full text-2xl text-green-600 font-bold">🏥</div>
            <div className="bg-green-100 p-3 rounded-full text-2xl text-green-600 font-bold">🩺</div>
          </div>
        </div>


      </section>

      {/* Info Cards */}
      <section className="flex items-center flex-wrap justify-evenly bg-transparent w-full h-60">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-xl p-6 text-center w-100 h-40 shadow hover:shadow-lg transition "
          >
            {card.icon}
            <h3 className="text-xl font-bold mt-4 text-blue-700">{card.title}</h3>
            {card.subtitle && (
              <p className="text-gray-600 mt-2">{card.subtitle}</p>
            )}
            {card.text && (
              <p className="text-gray-500 mt-1">{card.text}</p>
            )}

            {card.button.link ? (
              <NavLink to={card.button.link}>
                <button className={card.button.className}>{card.button.label}</button>
              </NavLink>
            ) : (
              <button className={`mt-4 ${card.button.className}`}>
                {card.button.label}
              </button>
            )}
          </div>
        ))}
      </section>

    </div>
  );
};

export default Home;
