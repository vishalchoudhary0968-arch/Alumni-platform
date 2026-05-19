import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* 🔥 HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <span className="badge">✨ Welcome Alumni</span>
          <h1>Connect. Grow. Succeed Together 🎓</h1>
          <p>
            Join thousands of alumni building careers, sharing opportunities,
            and creating lasting professional connections
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate("/alumni")}>
              <span>🎓</span> Explore Alumni
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/register")}
            >
              <span>✨</span> Join Network
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Alumni Members</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Job Opportunities</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Companies</p>
            </div>
          </div>
        </div>
      </div>

      {/* 💡 FEATURES */}
      <div className="features">
        <div className="section-header">
          <span className="section-badge">✨ Features</span>
          <h2>Everything You Need in One Place</h2>
          <p>Powerful tools to help you connect and grow your career</p>
        </div>

        <div className="feature-grid">
          <div className="card">
            <div className="card-icon">🎓</div>
            <h3>Alumni Directory</h3>
            <p>
              Search and connect with alumni from different batches and branches
            </p>
            <button className="card-link" onClick={() => navigate("/alumni")}>
              Explore →
            </button>
          </div>

          <div className="card">
            <div className="card-icon">💼</div>
            <h3>Job Portal</h3>
            <p>
              Discover exclusive job opportunities posted by companies and
              alumni
            </p>
            <button className="card-link" onClick={() => navigate("/jobs")}>
              View Jobs →
            </button>
          </div>

          <div className="card">
            <div className="card-icon">🎉</div>
            <h3>Events & Meetups</h3>
            <p>Join alumni events, workshops, and networking sessions</p>
            <button className="card-link" onClick={() => navigate("/events")}>
              See Events →
            </button>
          </div>

          <div className="card">
            <div className="card-icon">🌟</div>
            <h3>Success Stories</h3>
            <p>
              Read inspiring stories from successful alumni around the world
            </p>
            <button className="card-link" onClick={() => navigate("/success")}>
              Read Stories →
            </button>
          </div>

          <div className="card">
            <div className="card-icon">💰</div>
            <h3>Support & Donate</h3>
            <p>Give back to your alma mater and help future generations</p>
            <button className="card-link" onClick={() => navigate("/donation")}>
              Contribute →
            </button>
          </div>

          <div className="card">
            <div className="card-icon">📈</div>
            <h3>Career Guidance</h3>
            <p>Get mentorship and career advice from experienced alumni</p>
            <button className="card-link" onClick={() => navigate("/alumni")}>
              Find Mentors →
            </button>
          </div>
        </div>
      </div>

      {/* 🌟 HOW IT WORKS */}
      <div className="how-it-works">
        <div className="section-header">
          <span className="section-badge">📖 How It Works</span>
          <h2>Get Started in 3 Simple Steps</h2>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-icon">📝</div>
            <h3>Register</h3>
            <p>
              Create your profile with your educational and professional details
            </p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-icon">🔍</div>
            <h3>Connect</h3>
            <p>
              Search alumni, explore jobs, and join events that interest you
            </p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-icon">🚀</div>
            <h3>Grow</h3>
            <p>
              Build your network, find opportunities, and advance your career
            </p>
          </div>
        </div>
      </div>

      {/* 🎯 TESTIMONIALS */}
      <div className="testimonials">
        <div className="section-header">
          <span className="section-badge">💬 Testimonials</span>
          <h2>What Our Alumni Say</h2>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p>
              This platform helped me land my dream job! The alumni network is
              incredibly supportive and helpful.
            </p>
            <div className="author">
              <div className="author-avatar">RS</div>
              <div className="author-info">
                <h4>Rahul Sharma</h4>
                <span>Software Engineer at Google</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p>
              Amazing platform to stay connected with my batchmates and discover
              new opportunities in my field.
            </p>
            <div className="author">
              <div className="author-avatar">PK</div>
              <div className="author-info">
                <h4>Priya Kumar</h4>
                <span>Product Manager at Microsoft</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p>
              The mentorship I received from senior alumni was invaluable.
              Highly recommend joining this network!
            </p>
            <div className="author">
              <div className="author-avatar">AV</div>
              <div className="author-info">
                <h4>Amit Verma</h4>
                <span>Data Scientist at Amazon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 CALL TO ACTION */}
      <div className="cta">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our growing community of successful alumni today</p>
          <div className="cta-buttons">
            <button
              className="btn-cta-primary"
              onClick={() => navigate("/register")}
            >
              Join Now - It's Free! 🎉
            </button>
            <button
              className="btn-cta-secondary"
              onClick={() => navigate("/alumni")}
            >
              Explore Alumni Directory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
