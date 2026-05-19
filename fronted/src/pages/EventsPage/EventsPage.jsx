import React, { useState } from "react";
import "./EventsPage.css";

export default function EventPage() {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const events = [
    {
      id: 1,
      title: "Alumni Meet 2026",
      date: "10 May 2026",
      time: "10:00 AM - 5:00 PM",
      location: "Indore",
      venue: "Main Auditorium",
      desc: "Reconnect with your college friends and network with alumni.",
      category: "Networking",
      spots: "150 seats left",
    },
    {
      id: 2,
      title: "Tech Talk - AI & Future",
      date: "18 May 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
      venue: "Zoom Meeting",
      desc: "Learn about AI trends from industry experts.",
      category: "Workshop",
      spots: "Unlimited",
    },
    {
      id: 3,
      title: "Startup Workshop",
      date: "25 May 2026",
      time: "9:00 AM - 6:00 PM",
      location: "Bhopal",
      venue: "Innovation Center",
      desc: "Build your startup ideas with mentors guidance.",
      category: "Workshop",
      spots: "50 seats left",
    },
    {
      id: 4,
      title: "Career Guidance Seminar",
      date: "5 June 2026",
      time: "11:00 AM - 2:00 PM",
      location: "Mumbai",
      venue: "Conference Hall",
      desc: "Get career advice from industry professionals.",
      category: "Seminar",
      spots: "100 seats left",
    },
    {
      id: 5,
      title: "Sports Day 2026",
      date: "12 June 2026",
      time: "8:00 AM - 6:00 PM",
      location: "Delhi",
      venue: "Sports Complex",
      desc: "Join alumni for a day of sports and fun activities.",
      category: "Sports",
      spots: "200 seats left",
    },
    {
      id: 6,
      title: "Annual Gala Dinner",
      date: "20 June 2026",
      time: "7:00 PM - 11:00 PM",
      location: "Bangalore",
      venue: "Grand Hotel",
      desc: "Celebrate achievements with alumni in a grand evening.",
      category: "Social",
      spots: "120 seats left",
    },
  ];

  const handleJoinEvent = (eventId, eventTitle) => {
    if (registeredEvents.includes(eventId)) {
      alert(`You're already registered for "${eventTitle}"! ✅`);
      return;
    }

    setRegisteredEvents([...registeredEvents, eventId]);
    alert(`Successfully registered for "${eventTitle}"! 🎉`);
  };

  const isRegistered = (eventId) => {
    return registeredEvents.includes(eventId);
  };

  return (
    <div className="event-container">
      <div className="event-header">
        <span className="event-badge">✨ Events</span>
        <h1>🎉 Upcoming Events</h1>
        <p className="event-subtitle">
          Join our exclusive alumni events and grow your network
        </p>
      </div>

      <div className="event-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-category">{event.category}</div>

            <h2>{event.title}</h2>

            <div className="event-info">
              <p className="event-date">
                <span className="icon">📅</span>
                <span>{event.date}</span>
              </p>
              <p className="event-time">
                <span className="icon">🕐</span>
                <span>{event.time}</span>
              </p>
              <p className="event-location">
                <span className="icon">📍</span>
                <span>{event.location}</span>
              </p>
              <p className="event-venue">
                <span className="icon">🏢</span>
                <span>{event.venue}</span>
              </p>
            </div>

            <p className="event-desc">{event.desc}</p>

            <div className="event-footer">
              <p className="event-spots">🔥 {event.spots}</p>
              <button
                className={`join-btn ${isRegistered(event.id) ? "registered" : ""}`}
                onClick={() => handleJoinEvent(event.id, event.title)}
              >
                {isRegistered(event.id) ? "✓ Registered" : "Join Event"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Registered Events Count */}
      {registeredEvents.length > 0 && (
        <div className="registered-banner">
          <p>
            🎊 You're registered for <strong>{registeredEvents.length}</strong>{" "}
            event
            {registeredEvents.length > 1 ? "s" : ""}!
          </p>
        </div>
      )}
    </div>
  );
}
