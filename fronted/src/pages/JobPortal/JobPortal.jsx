import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./JobPortal.css";

const JobPortal = () => {
  const navigate = useNavigate();

  // 🔹 Create Job Form State
  const [form, setForm] = useState({
    company: "",
    logo: "",
    position: "",
    location: "",
    posted: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/job/jobs/create/", form);
      alert("Job Created ✅");

      setForm({
        company: "",
        logo: "",
        position: "",
        location: "",
        posted: "",
      });
    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  // 🔹 Existing Jobs (Same as yours)
  const jobs = [
    {
      id: 1,
      company: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/960px-Tata_Consultancy_Services_old_logo.svg.png",
      position: "Frontend Developer",
      location: "Mumbai",
      posted: "2 days ago",
    },
    {
      id: 2,
      company: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      position: "Backend Developer",
      location: "Bangalore",
      posted: "1 week ago",
    },
    {
      id: 3,
      company: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
      position: "Full Stack Developer",
      location: "Hyderabad",
      posted: "3 days ago",
    },
    {
      id: 4,
      company: "HCL",
      logo: "https://1000logos.net/wp-content/uploads/2023/03/HCL-logo.jpg",
      position: "Software Engineer",
      location: "Noida",
      posted: "5 days ago",
    },
    {
      id: 5,
      company: "Tech Mahindra",
      logo: "https://download.logo.wine/logo/Tech_Mahindra/Tech_Mahindra-Logo.wine.png",
      position: "React Developer",
      location: "Pune",
      posted: "1 day ago",
    },
    {
      id: 6,
      company: "Capgemini",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
      position: "Java Developer",
      location: "Chennai",
      posted: "4 days ago",
    },
  ];

  return (
    <div className="job-container">
      <h1>Job Opportunities</h1>

      {/* 🔹 JOB LIST */}
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <img src={job.logo} alt="logo" className="logo" />

          <div className="job-info">
            <h2>{job.position}</h2>
            <p>
              <b>{job.company}</b>
            </p>
            <p>📍 {job.location}</p>
            <p>🕒 {job.posted}</p>
          </div>

          <button
            className="apply-btn"
            onClick={() => navigate(`/apply/${job.id}`)}
          >
            Apply
          </button>
        </div>
      ))}

      {/* 🔻 CREATE JOB SECTION */}
      <div className="create-job">
        <h2>Create Job</h2>

        <form onSubmit={handleCreateJob}>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
          />

          <input
            name="logo"
            value={form.logo}
            onChange={handleChange}
            placeholder="Logo URL"
          />

          <input
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Position"
          />

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <input
            name="posted"
            value={form.posted}
            onChange={handleChange}
            placeholder="Posted (e.g. 2 days ago)"
          />

          <button type="submit">Create Job</button>
        </form>
      </div>
    </div>
  );
};

export default JobPortal;
