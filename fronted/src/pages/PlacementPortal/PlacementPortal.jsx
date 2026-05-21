import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PlacementPortal.css";

export default function PlacementPortal() {
  const [students, setStudents] = useState([]);

  // ================= FETCH DATA =================

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/applications/");

      setStudents(res.data);
    } catch (error) {
      console.log(error);

      alert("Error Fetching Data ❌");
    }
  }

  // ================= VERIFY =================

  async function verifyStudent(student) {
    try {
      await axios.put(`http://127.0.0.1:8000/api/update/${student.id}/`, {
        ...student,
        is_verified: true,
      });

      // UI UPDATE
      const updated = students.map((item) => {
        if (item.id === student.id) {
          return {
            ...item,
            is_verified: true,
          };
        }

        return item;
      });

      setStudents(updated);

      alert("Student Verified ✅");
    } catch (error) {
      console.log(error);

      alert("Verify Failed ❌");
    }
  }

async function updateStudent(student) {
  try {
    const full_name = prompt("Enter Full Name", student.full_name);
    const company = prompt("Enter Company", student.company);
    const location = prompt("Enter Location", student.location);
    const skills = prompt("Enter Skills", student.skills);
    const experience = prompt("Enter Experience", student.experience);

    const payload = {
      full_name: full_name || student.full_name,
      company: company || student.company,
      location: location || student.location,
      skills: skills || student.skills,
      experience: experience || student.experience,
    };

    await axios.put(`http://127.0.0.1:8000/api/update/${student.id}/`, payload);

    const updated = students.map((item) =>
      item.id === student.id ? { ...item, ...payload } : item,
    );

    setStudents(updated);

    alert("Student Updated ✅");
  } catch (error) {
    console.log(error.response?.data || error.message);
    alert("Update Failed ❌");
  }
}
  // ================= DELETE =================

  async function deleteStudent(id) {
    const check = window.confirm("Delete This Application Permanently?");

    if (!check) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`);

      // UI DELETE

      const updated = students.filter((student) => student.id !== id);

      setStudents(updated);

      alert("Deleted Permanently ❌");
    } catch (error) {
      console.log(error);

      alert("Delete Failed ❌");
    }
  }

  return (
    <div className="placement-container">
      {/* ================= HEADER ================= */}

      <div className="placement-header">
        <h1>Placement Portal</h1>

        <p>Verify Student Applications</p>

        <div className="stats">
          <div className="stat-box">
            <h3>{students.length}</h3>
            <p>Total</p>
          </div>

          <div className="stat-box">
            <h3>{students.filter((student) => student.is_verified).length}</h3>
            <p>Verified</p>
          </div>

          <div className="stat-box">
            <h3>{students.filter((student) => !student.is_verified).length}</h3>
            <p>Pending</p>
          </div>
        </div>
      </div>

      {/* ================= STUDENT CARDS ================= */}

      <div className="student-grid">
        {students.map((student) => (
          <div
            className={`student-card ${
              student.is_verified ? "verified-card" : ""
            }`}
            key={student.id}
          >
            {student.is_verified && (
              <div className="verified-badge">✅ Verified</div>
            )}

            <h2>{student.full_name}</h2>

            <p>
              <strong>Email:</strong>
              {student.email}
            </p>

            <p>
              <strong>Company:</strong>
              {student.company}
            </p>

            <p>
              <strong>Work Type:</strong>
              {student.work_type}
            </p>

            <p>
              <strong>Location:</strong>
              {student.location}
            </p>

            <p>
              <strong>Skills:</strong>
              {student.skills}
            </p>

            <p>
              <strong>Experience:</strong>
              {student.experience} Years
            </p>

            <a
              href={student.resume}
              target="_blank"
              rel="noreferrer"
              className="resume-link"
            >
              View Resume
            </a>

            {/* ================= BUTTONS ================= */}

            <div className="btn-box">
              {student.is_verified ? (
                <button className="verified-btn" disabled>
                  Verified
                </button>
              ) : (
                <button
                  className="verify-btn"
                  onClick={() => verifyStudent(student)}
                >
                  Verify
                </button>
              )}

              <button
                className="update-btn"
                onClick={() => updateStudent(student)}
              >
                Update
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
