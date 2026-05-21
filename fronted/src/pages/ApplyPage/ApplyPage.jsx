import React from "react";
import axios from "axios";
import "./ApplyPage.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ApplyPage() {
  async function handleSubmit(e) {
    e.preventDefault();

    const Data = {
      full_name: e.target.full_name.value,

      email: e.target.email.value,

      company: e.target.company.value,

      work_type: e.target.work_type.value,

      location: e.target.location.value,

      skills: e.target.skills.value,

      experience: Number(e.target.experience.value),

      resume: e.target.resume.value,

      is_verified: false,
    };

    console.log(Data);

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/apply/", Data);

      console.log(res.data);

      toast.success("Application Submitted ✅");

      e.target.reset();
    } catch (err) {
      console.log(err.response?.data);

      toast.error("Error submitting ❌");
    }
  }

  return (
    <>
      <div className="main">
        <h2>Job Application</h2>

        <p className="register-subtitle">Apply for your dream job</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="full_name" placeholder="Full Name" />

          <br />
          <br />

          <input type="email" name="email" placeholder="Email" />

          <br />
          <br />

          <input type="text" name="company" placeholder="Company Name" />

          <br />
          <br />

          <select name="work_type">
            <option value="">Select Work Type</option>

            <option value="Work From Home">Work From Home</option>

            <option value="Office">Office</option>

            <option value="Hybrid">Hybrid</option>
          </select>

          <br />
          <br />

          <input type="text" name="location" placeholder="Location" />

          <br />
          <br />

          <input type="text" name="skills" placeholder="Skills" />

          <br />
          <br />

          <input type="number" name="experience" placeholder="Experience" />

          <br />
          <br />

          <input type="text" name="resume" placeholder="Resume Link" />

          <br />
          <br />

          <button type="submit">Apply Now</button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
