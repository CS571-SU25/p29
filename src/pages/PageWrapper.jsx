// src/components/PageWrapper.jsx
// PageWrapper.jsx
import React from "react";
import { Container } from "react-bootstrap";

export default function PageWrapper({ children }) {
  return (
    <Container fluid style={{ paddingTop: "4rem", marginBottom: "2rem" }}>
      {children}
    </Container>
  );
}
