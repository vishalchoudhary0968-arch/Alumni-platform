import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobPortal.css";

const JobPortal = () => {
  const navigate = useNavigate();

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
    {
      id: 7,
      company: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
      position: "Cloud Engineer",
      location: "Bangalore",
      posted: "6 days ago",
    },
    {
      id: 8,
      company: "Cognizant",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItTEO7Qoqc5FGT_NYj2MTUEKG-5P-D_nIDw&s",
      position: "Python Developer",
      location: "Hyderabad",
      posted: "2 weeks ago",
    },
    {
      id: 9,
      company: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      position: "Data Analyst",
      location: "Mumbai",
      posted: "3 days ago",
    },
    {
      id: 10,
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      position: "Software Engineer",
      location: "Remote",
      posted: "1 week ago",
    },
    {
      id: 11,
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      position: "Backend Engineer",
      location: "Hyderabad",
      posted: "2 days ago",
    },
    {
      id: 12,
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      position: "DevOps Engineer",
      location: "Bangalore",
      posted: "5 days ago",
    },
    {
      id: 13,
      company: "Flipkart",
      logo: "https://images.icon-icons.com/729/PNG/512/flipkart_icon-icons.com_62718.png",
      position: "UI/UX Designer",
      location: "Bangalore",
      posted: "1 week ago",
    },
  ];

  return (
    <div className="job-container">
      <h1>Job Opportunities</h1>

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
    </div>
  );
};

export default JobPortal;
