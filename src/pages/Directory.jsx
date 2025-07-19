import React, { useContext, useState } from "react";
import FavoritesContext from "../contexts/FavoritesContext";
import labsData from "../data/labs.json"; // Adjust the path if needed
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Directory() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [labs, setLabs] = useState(labsData);

  const handleSave = (lab) => {
    // Add to favorites
    setFavorites((prev) => [...prev, lab]);
    // Remove from current labs
    setLabs((prevLabs) => prevLabs.filter((l) => l.id !== lab.id));
  };

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Research Directory</h1>
      <Row xs={1} md={2} className="g-4">
        {labs.map((lab) => (
          <Col key={lab.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{lab.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>PI:</strong> {lab.pi}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Eligibility:</strong> {lab.eligibility.join(", ")} <br />
                  <strong>Funding:</strong> {lab.funding} <br />
                  <strong>Description:</strong> {lab.description}
                </Card.Text>
                <a href={lab.link} target="_blank" rel="noopener noreferrer" className="d-block mb-3">
                  Learn More
                </a>
                <Button
                  variant="primary"
                  className="rounded-pill"
                  onClick={() => handleSave(lab)}
                >
                  Save to Favorites
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
