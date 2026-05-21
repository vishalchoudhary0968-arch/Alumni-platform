import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Regester/Regester'
import AlumniDirectory from './pages/AlumniDirectory/AlumniDirectory'
import JobPortal from "./pages/JobPortal/JobPortal";
import EventsPage from './pages/EventsPage/EventsPage'
import PlacementPortal from "./pages/PlacementPortal/PlacementPortal"
import SuccessStories from "./pages/Successstories/Successstories"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyPage from "./pages/ApplyPage/ApplyPage";





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alumni" element={<AlumniDirectory />} />
        <Route path="/jobs" element={<JobPortal />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/placementPortal" element={<PlacementPortal />} />
        <Route path="/success" element={<SuccessStories />} />
        <Route path="/apply/:id" element={<ApplyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
