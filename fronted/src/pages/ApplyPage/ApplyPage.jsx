import React from "react";
import axios from "axios"; // ✅ add this
import "./ApplyPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ApplyPage() {
  async function handleSubmit(e) {
    e.preventDefault();

    let Data = {
      full_name: e.target[0].value,
      email: e.target[1].value,
      company: e.target[2].value,
      work_type: e.target[3].value,
      location: e.target[4].value,
      skills: e.target[5].value,
      experience: e.target[6].value,
      resume: e.target[7].value,
    };

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/apply/", // ✅ correct
        Data,
      );

      toast.success("Application Submitted ✅");
      e.target.reset();
    } catch (err) {
      console.log(err);
      toast.error("Error submitting ❌");
    }
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
