import React from "react";
import axios from "axios";
import "./Regester.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  async function handleSubmit(e) {
    e.preventDefault();

    let Data = {
      full_name: e.target[0].value,
      passing_year: e.target[1].value,
      course: e.target[2].value,
      company: e.target[3].value,
      city: e.target[4].value,
      country: e.target[5].value,
      linkedin: e.target[6].value,
      photo: e.target[7].value,
    };

    try {
      await axios.post("http://127.0.0.1:8000/api/create/", Data);
      toast.success("Data Saved Successfully ✅");
      e.target.reset();
    } catch (err) {
      console.log(err);
      toast.error("Error Saving Data ❌");
    }
  }

  return (
    <>
      <div className="main">
        <h2>Alumni Registration</h2>
        <p className="register-subtitle">Join our growing alumni community</p>

        <form onSubmit={handleSubmit}>
          <input placeholder="Full Name" />
          <br />
          <br />

          <input placeholder="Passing Year" />
          <br />
          <br />

          <input placeholder="Course" />
          <br />
          <br />

          <input placeholder="Company" />
          <br />
          <br />

          <input placeholder="City" />
          <br />
          <br />

          <input placeholder="Country" />
          <br />
          <br />

          <input placeholder="LinkedIn" />
          <br />
          <br />

          <input placeholder="Photo URL" />
          <br />
          <br />

          <button type="submit">Register Now</button>
        </form>
      </div>

      {/* 🔔 Toast Container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
