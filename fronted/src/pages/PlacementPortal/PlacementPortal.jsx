import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PlacementPortal.css";

export default function PlacementPortal() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 👇 DATA LOAD
  useEffect(() => {
    fetchStudents();
  }, []);

  // 👇 GET DATA
  async function fetchStudents() {
    try {
      setLoading(true);
      const res = await axios.get("http://127.0.0.1:8000/api/applications/");
      setStudents(res.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError("Failed to load applications. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // 👇 VERIFY (Update on backend too if needed)
  async function verifyStudent(id) {
    try {
      // If you have a verify API endpoint, uncomment below:
      // await axios.put(`http://127.0.0.1:8000/api/applications/${id}/verify/`);

      const updatedStudents = students.map((student) => {
        if (student.id === id) {
          return { ...student, verified: true };
        }
        return student;
      });
      setStudents(updatedStudents);
      alert("✅ Student verified successfully!");
    } catch (error) {
      console.error("Error verifying student:", error);
      alert("❌ Failed to verify student");
    }
  }

  // 👇 REJECT (Delete from backend if needed)
  async function rejectStudent(id) {
    if (!window.confirm("Are you sure you want to reject this application?")) {
      return;
    }

    try {
      // If you have a delete API endpoint, uncomment below:
      // await axios.delete(`http://127.0.0.1:8000/api/applications/${id}/`);

      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
      alert("🗑️ Application rejected successfully!");
    } catch (error) {
      console.error("Error rejecting student:", error);
      alert("❌ Failed to reject application");
    }
  }

  // Loading State
  if (loading) {
    return (
      <div className="placement-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading applications...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="placement-container">
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          <p>{error}</p>
          <button onClick={fetchStudents} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="placement-container">
      <div className="placement-header">
        <span className="header-badge">📋 Admin Panel</span>
        <h1>Placement Verification Portal</h1>
        <p>Review and verify student applications</p>
        <div className="stats">
          <div className="stat-box">
            <h3>{students.length}</h3>
            <p>Total Applications</p>
          </div>
          <div className="stat-box">
            <h3>{students.filter((s) => s.verified).length}</h3>
            <p>Verified</p>
          </div>
          <div className="stat-box">
            <h3>{students.filter((s) => !s.verified).length}</h3>
            <p>Pending</p>
          </div>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="no-data">
          <p>📭 No applications found</p>
        </div>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <div
              className={`student-card ${student.verified ? "verified-card" : ""}`}
              key={student.id}
            >
              {student.verified && (
                <div className="verified-badge">✓ Verified</div>
              )}

              <h2>{student.full_name}</h2>

              <div className="student-info">
                <p>
                  <span className="label">📧 Email:</span>
                  <span className="value">{student.email}</span>
                </p>

                <p>
                  <span className="label">🏢 Company:</span>
                  <span className="value">{student.company}</span>
                </p>

                <p>
                  <span className="label">💼 Work Type:</span>
                  <span className="value">{student.work_type}</span>
                </p>

                <p>
                  <span className="label">📍 Location:</span>
                  <span className="value">{student.location}</span>
                </p>

                <p>
                  <span className="label">⚡ Skills:</span>
                  <span className="value">{student.skills}</span>
                </p>

                <p>
                  <span className="label">📊 Experience:</span>
                  <span className="value">{student.experience}</span>
                </p>
              </div>

              <a
                href={student.resume}
                target="_blank"
                rel="noreferrer"
                className="resume-link"
              >
                📄 View Resume →
              </a>

              {/* BUTTONS */}
              <div className="btn-box">
                {student.verified ? (
                  <button className="verified-btn" disabled>
                    ✅ Verified
                  </button>
                ) : (
                  <button
                    className="verify-btn"
                    onClick={() => verifyStudent(student.id)}
                  >
                    ✓ Verify
                  </button>
                )}

                <button
                  className="reject-btn"
                  onClick={() => rejectStudent(student.id)}
                >
                  ✗ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
