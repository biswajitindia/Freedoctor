


import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import Contact from "./components/Contact/Contact";
import AppointmentForm from "./components/Contact/AppointmentForm";
import Landpage from "./components/Home/Landpage";
import ChatAi from "./components/Contact/ChatAi";
import About from "./components/About/About";
import AppointmentList from "./components/Contact/ShowAppointment";
import JoinRoom from "./components/videocall/jionroom";
import Doctors from "./components/Department/Doctors";
import PatientsDashboard from "./components/DoctorDashbord/PasentsDashbord";
import DoctorDashboard from "./components/DoctorDashbord/DoctrorDashbord";
import ProtectedRoute from "./ProtectedRoute";
// ✅ Add DoctorVideoRoom & PatientJoinRoom
import DoctorVideoRoom from "./components/videocall/DoctorVideoRoom";
import PatientJoinRoom from "./components/videocall/PatientJoinRoom";
import PatientSymptomForm from "./components/Contact/PatientSymptomForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landpage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/contact", element: <Contact /> },
      { path: "/appointment", element: <AppointmentList /> },
      { path: "/AppointmentForm", element: <AppointmentForm /> },
      { path: "/doctors", element: <Doctors /> },

      // 🔐 Protected Routes
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/chat",
        element: (
          <ProtectedRoute>
            <ChatAi />
          </ProtectedRoute>
        ),
      },
      {
        path: "/video/room/:roomId",
        element: (
          <ProtectedRoute>
            <JoinRoom />
          </ProtectedRoute>
        ),
      },
      {
        path: "/doctor-dashboard",
        element: (
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/patient-dashboard",
        element: (
          <ProtectedRoute allowedRoles={["patient"]}>
            <PatientsDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/SymptomForm",
        element: (
          <ProtectedRoute allowedRoles={["patient"]}>
            <PatientSymptomForm />
          </ProtectedRoute>
        ),
      },

      // ✅ Fixed Video Routes
      {
        path: "/doctor/video",
        element: (
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorVideoRoom />
          </ProtectedRoute>
        ),
      },
      {
        path: "/patient/video",
        element: (
          <ProtectedRoute allowedRoles={["patient"]}>
            <PatientJoinRoom />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
