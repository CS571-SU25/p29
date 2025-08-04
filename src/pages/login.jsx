import React, { useState, useContext } from "react";
import { Form, Button, Alert, Card } from "react-bootstrap";
import AuthContext from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { setUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    setSuccess(true);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setUser(user);

    setEmail("");
    setPassword("");
  };

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
      padding: "1rem"
    }}>
      <Card style={{
        width: "100%",
        maxWidth: "400px",
        padding: "2rem",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px"
      }}>
        <h3 className="text-center mb-4">Login to Your Account</h3>
        {success && <Alert variant="success">Login successful!</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleLogin} autoComplete="off">
          {/* Dummy fields to prevent autofill */}
          <input type="text" name="username" autoComplete="username" style={{ display: "none" }} />
          <input type="password" name="password" autoComplete="current-password" style={{ display: "none" }} />

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="nope-email"
              autoComplete="new-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="nope-password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100 rounded-pill">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
}
