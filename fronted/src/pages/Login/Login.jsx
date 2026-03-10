import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("⚠️ Email aur Password dono bharna zaroori hai");
      return;
    }

    // ✅ Demo login (backend later)
    localStorage.setItem("token", "dummy-jwt-token");
    localStorage.setItem("userEmail", email);

    navigate("/profile");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Alumni Login</h2>
        <p className="subtitle">Welcome back! Please login to continue</p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="alumni@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="register-text">
          New Alumni? <span>Register Here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
