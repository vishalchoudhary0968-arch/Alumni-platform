import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AlumniDirectory.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AlumniDirectory() {
  const [alumni, setAlumni] = useState([]);
  const [searchYear, setSearchYear] = useState(""); // 🔹 search state

  // 🔹 GET DATA
  const fetchAlumni = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/list/");
      setAlumni(res.data);
    } catch (err) {
      toast.error("Failed to fetch data ❌");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlumni();
  }, []);

  // 🔹 DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this record?")) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/api/delete/${id}/`);
      toast.success("Deleted Successfully ✅");
      fetchAlumni();
    } catch (err) {
      toast.error("Delete Failed ❌");
    }
  };

  // 🔹 UPDATE
  const handleUpdate = async (item) => {
    const updatedData = {
      full_name: prompt("Full Name", item.full_name),
      passing_year: prompt("Passing Year", item.passing_year),
      course: prompt("Course", item.course),
      company: prompt("Company", item.company),
      city: prompt("City", item.city),
      country: prompt("Country", item.country),
      linkedin: prompt("LinkedIn", item.linkedin),
      photo: prompt("Photo URL", item.photo),
    };

    try {
      await axios.put(
        `http://127.0.0.1:8000/api/update/${item.id}/`,
        updatedData,
      );
      toast.success("Updated Successfully ✨");
      fetchAlumni();
    } catch (err) {
      toast.error("Update Failed ❌");
    }
  };

  // 🔹 FILTER LOGIC
  const filteredAlumni = alumni.filter((item) =>
    item.passing_year.toString().includes(searchYear),
  );

  return (
    <>
      <div className="alumni-container">
        <h2>🎓 Alumni Directory</h2>

        {/* 🔍 SEARCH BAR */}
        <input
          type="text"
          placeholder="Search by Passing Year !"
          value={searchYear}
          onChange={(e) => setSearchYear(e.target.value)}
          className="search-input"
        />

        <div className="alumni-grid">
          {filteredAlumni.map((item) => (
            <div className="alumni-card" key={item.id}>
              <img
                src={item.photo || "https://via.placeholder.com/150"}
                alt={item.full_name}
              />

              <h3>{item.full_name}</h3>
              <p>
                <b>Course:</b> {item.course}
              </p>
              <p>
                <b>Passing Year:</b> {item.passing_year}
              </p>
              <p>
                <b>Company:</b> {item.company}
              </p>
              <p>
                {item.city}, {item.country}
              </p>

              {item.linkedin && (
                <a href={item.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}

              <div className="card-buttons">
                <button onClick={() => handleUpdate(item)}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
