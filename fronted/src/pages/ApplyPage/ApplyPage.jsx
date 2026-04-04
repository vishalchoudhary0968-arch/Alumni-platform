import React from "react";
import "./ApplyPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ApplyPage() {
  function handleSubmit(e) {
    e.preventDefault();

    let Data = {
      name: e.target[0].value,
      email: e.target[1].value,
      company: e.target[2].value,
      role: e.target[3].value,
      work_type: e.target[4].value,
      location: e.target[5].value,
      skills: e.target[6].value,
      experience: e.target[7].value,
      resume: e.target[8].value,
    };

    console.log("Form Data:", Data);

    toast.success("Application Submitted ✅");

    e.target.reset();
  }

  return (
    <>
      <div className="main">
        <h2>Job Application</h2>
        <p className="register-subtitle">Apply for your dream job</p>

        <form onSubmit={handleSubmit}>
          <input placeholder="Full Name" />
          <br />
          <br />

          <input placeholder="Email" />
          <br />
          <br />

          <input placeholder="Company Name" />
          <br />
          <br />

          <input placeholder="Role" />
          <br />
          <br />

          <select>
            <option value="">Work Type</option>
            <option>Work From Home</option>
            <option>Office</option>
            <option>Hybrid</option>
          </select>
          <br />
          <br />

          <input placeholder="Location" />
          <br />
          <br />

          <input placeholder="Skills" />
          <br />
          <br />

          <input placeholder="Experience" />
          <br />
          <br />

          <input placeholder="Resume Link" />
          <br />
          <br />

          <button type="submit">Apply Now</button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
