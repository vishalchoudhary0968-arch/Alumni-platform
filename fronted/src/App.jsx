import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Regester/Regester'
import AlumniDirectory from './pages/AlumniDirectory/AlumniDirectory'
import JobPortal from './pages/JobPortal/JobPortal'
import EventsPage from './pages/EventsPage/EventsPage'
import DonationPage from './pages/DonationPage/DonationPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alumni" element={<AlumniDirectory />} />
        <Route path="/jobPortal" element={<jobPortal />} />
        <Route path="/eventsPage" element={<EventsPage />} />
        <Route path="/donationPage" element={<donationPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
