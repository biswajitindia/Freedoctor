import React from "react";
import bgImage from "../../Assets/bgImage.jpg";
// services.js
const services = [
  {
    title: "24/7 Family doctors",
    description:
      "See a doctor from the comfort of your home for cold & flu, UTIs, sore throat, stomach ache, skin concerns, and more.",
    icon: "⏰",
  },
  {
    title: "Doctor’s notes",
    description:
      "If you are sick and need a medical note for work, or school, our doctors can get them issued within minutes.",
    icon: "📝",
  },
  {
    title: "Online prescriptions",
    description:
      "Within minutes, get your prescriptions or refills sent to your local pharmacy.",
    icon: "📄",
  },
  {
    title: "Lab requisitions",
    description:
      "Get your lab requests for blood work and imaging needs from our doctors. Completed at your local lab or diagnostic center.",
    icon: "💧",
  },
  {
    title: "Mental health counselling",
    description:
      "Talk to our counselors to overcome anxiety, depression, and other challenges.",
    icon: "🧠",
  },
  {
    title: "Nutrition consultations",
    description:
      "Get personalized diet plans to address food sensitivities, weight loss and health issues.",
    icon: "🥗",
  },
 {
    title: "Specialist referral",
    description:
      "Get a referral to a gynaecologist, cardiologist, neurologist and more specialists whenever and wherever you need.",
    icon: "🩺➡️",
  },
  {
    title: "Annual checkups",
    description:
      "Book your annual check-up anytime, anywhere to keep your health on track without a clinic visit.",
    icon: "📈❤️", 
  },
  {
    title: "Dermatology care",
    description:
      "Our 24/7 online doctor will provide skin consultations, diagnosis, and online prescriptions for rashes, acne, moles, and other skin issues.",
    icon: "🧑‍⚕️➕",
  },

];

const About = () => {
  return (
    <section className=" py-12 px-6 md:px-16 flex flex-col items-center gap-10 bg-gray-900 w-auto h-auto text-white overflow-hidden overflow-y-scroll  "
    // className="flex justify-center items-center bg-cover bg-center h-screen w-full" 
        //  style={{ backgroundImage: `url(${bgImage})` }}
         >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 border-b-2 border-rose-200 inline-block pb-2">
        Our online doctors are ready to help when you are sick
      </h1>

      <div className="grid w-300 h-150 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8  ">
        {services.map((service, index) => (
          <div
            key={index}
            className=" w-90 h-50 border border-white rounded-lg flex flex-col justify-evenly hover:shadow-"
          >
            {/* <div className="text-3xl text-orange-400 mb-4">{service.icon}</div> */}
            <h2 className="text-2xl font-semibold text-white ">
              {service.title} <span className="text-3xl text-orange-400  ">{service.icon}</span>
            </h2>
            <p className="text-gray-600 text-sm text-xl">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
