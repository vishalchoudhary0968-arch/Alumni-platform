import React from "react";
import "./Successstories.css";

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      name: "Vishal Choudhary",
      role: "Frontend Developer",
      company: "TP",
      image:
        "https://imgs.search.brave.com/DwtswQhdeJ16QT5Jmgw3zUzKkj4QLfc3BMMBca1Sx-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/MjYzLzMyNS9zbWFs/bC95b3VuZy1pbmRp/YW4tc3R1ZGVudC1i/b3ktcmVhZGluZy1i/b29rLXN0dWR5aW5n/LWluLWNvbGxlZ2Ut/bGlicmFyeS13aXRo/LWJvb2tzaGVsZi1i/ZWhpbmQtd29ya2lu/Zy1vbi1hc3NpZ25t/ZW50LW9yLXByb2pl/Y3QtcGhvdG8uanBn",
      story:
        "Started as a beginner and now working as a Frontend Developer at Google.",
    },

    {
      id: 2,
      name: "Priya Sharma",
      role: "Data Analyst",
      company: "Microsoft",
      image:
        "https://imgs.search.brave.com/dVFuSz3k4EfBbTrWmF6y3joRT02dgW2GSTeDURkfAGo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzUxLzg5LzMw/LzM2MF9GXzk1MTg5/MzA2OV9Dcm84ZmM3/Y1pqMWhhOUt5Slpp/YmdaOFRDUEVHazA5/Vy5qcGc",
      story: "Learned data analytics through projects and cracked Microsoft.",
    },

    {
      id: 3,
      name: "Rahul Verma",
      role: "Backend Engineer",
      company: "Amazon",
      image:
        "https://imgs.search.brave.com/eQ4qMl2EtSnj20-WmlsgonNx2oH7IL6GFLTSPWZ92J0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/NjgzMjY2MC9waG90/by9tYWxlLXRlZW5h/Z2Utc3R1ZGVudC1p/bi15ZWxsb3ctYmFj/a2dyb3VuZC1zdG9j/ay1waG90by5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MjRM/a2xhSzBob1BiZTdi/R0NTSFpQYmFXSktW/NnlIMEYxYjhsQUJi/T1MzMD0",
      story: "Built multiple Django projects and got placed at Amazon.",
    },

    {
      id: 4,
      name: "Anjali Singh",
      role: "UI/UX Designer",
      company: "Adobe",
      image:
        "https://imgs.search.brave.com/cc_-YHRVdaByrlVQrl9INVLqOH9hBkiwYMdp0V37zmg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTEv/NjM2LzcyMi9zbWFs/bC90aGUtc3R1ZGVu/dC11c2VzLWEtbm90/ZWJvb2stYW5kLWEt/c2Nob29sLWxpYnJh/cnktZnJlZS1waG90/by5qcGc",
      story:
        "Turned creativity into a career and joined Adobe as a UI/UX Designer.",
    },
  ];

  return (
    <div className="success-container">
      <div className="success-header">
        <h1>🌟 Success Stories</h1>
        <p>Inspiring journeys of students who achieved their dream careers</p>
      </div>

      <div className="stories-grid">
        {stories.map((item) => (
          <div className="story-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="story-content">
              <h2>{item.name}</h2>

              <h3>
                {item.role} @ {item.company}
              </h3>

              <p>{item.story}</p>

              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
