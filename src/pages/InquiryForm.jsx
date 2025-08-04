// src/pages/InquiryForm.jsx
// src/pages/InquiryForm.jsx
import React, { useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  Alert
} from "react-bootstrap";
import PageWrapper from "./PageWrapper";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const professors = [
  "Majid Afshar",
  "Matthew Churpek",
  "Anoop Mayampurath",
  "Juan Caicedo",
  "Colin Dewey",
  "Mark Craven",
  "Junjie Hu",
  "Huy Dinh"
];

export default function InquiryForm() {
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    level: "",
    pi: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", form);
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      level: "",
      pi: "",
      message: ""
    });
  };

  // Show login prompt if user not logged in
  if (!user) {
    return (
      <PageWrapper>
        <Container className="text-center mt-5">
          <h4>
            You must <Link to="/login">log in</Link> to submit an inquiry.
          </h4>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container
        fluid
        className="d-flex justify-content-center align-items-start"
        style={{ minHeight: "100vh", paddingTop: "6rem", paddingBottom: "2rem" }}
      >
        <div style={{ width: "100%", maxWidth: "700px" }}>
          <h2 className="text-center mb-3">Inquiry Form</h2>
          <p className="text-center text-muted mb-4">
            Use this form to express interest in joining a lab or working with a research professional.
          </p>

          {submitted && (
            <Alert variant="success">Your inquiry has been submitted!</Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="level" className="mb-3">
              <Form.Label>Academic Level</Form.Label>
              <Form.Select
                name="level"
                value={form.level}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="MS">MS</option>
                <option value="PhD">PhD</option>
                <option value="Undergraduate">Undergraduate</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="pi" className="mb-3">
              <Form.Label>Choose PI</Form.Label>
              <Form.Select
                name="pi"
                value={form.pi}
                onChange={handleChange}
              >
                <option value="">Select a PI...</option>
                {professors.map((name, idx) => (
                  <option key={idx} value={name}>{name}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="message" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Include your background, interests, and any relevant experience."
                rows={4}
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" className="rounded-pill px-4" variant="primary">
                Submit Inquiry
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </PageWrapper>
  );
}
