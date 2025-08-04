import React, { useContext, useState } from "react";
import { Card, Button, Row, Col, Container, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import FavoritesContext from "../contexts/FavoritesContext";
import PageWrapper from "../pages/PageWrapper";
import AuthContext from "../contexts/AuthContext";
import { Link } from "react-router-dom";




export default function Favorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [msEligible, setMsEligible] = useState(false);
  const [phdEligible, setPhdEligible] = useState(false);
  const [raFunding, setRaFunding] = useState(false);
  const { user } = useContext(AuthContext);

  if (!user) {
  return (
      <PageWrapper>
        <Container className="text-center mt-5">
          <h4>
            Please <Link to="/login">log in</Link> to view and manage your favorite labs.
          </h4>
        </Container>
      </PageWrapper>
    );

}


  const handleRemove = (id) => {
    const updated = favorites.filter((lab) => lab.id !== id);
    setFavorites(updated);
  };

  const filteredFavorites = favorites.filter((lab) => {
    const searchMatch = lab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.pi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchTerm.toLowerCase());

    const msMatch = !msEligible || lab.eligibility.includes("MS");
    const phdMatch = !phdEligible || lab.eligibility.includes("PhD");
    const fundingMatch = !raFunding || lab.funding.toLowerCase().includes("ra");

    return searchMatch && msMatch && phdMatch && fundingMatch;
  });

  return (
    <PageWrapper>
      <h2 className="text-center mb-4">My Favorite Labs</h2>

      <Container className="mb-4">
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search by title, PI, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <div className="d-flex gap-4 justify-content-center flex-wrap">
          <Form.Check
            type="checkbox"
            label="MS Eligible"
            checked={msEligible}
            onChange={(e) => setMsEligible(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="PhD Eligible"
            checked={phdEligible}
            onChange={(e) => setPhdEligible(e.target.checked)}
          />
          <Form.Check
            type="checkbox"
            label="RA Funding"
            checked={raFunding}
            onChange={(e) => setRaFunding(e.target.checked)}
          />
        </div>
      </Container>

      {filteredFavorites.length === 0 ? (
        <p className="text-center">No labs match your criteria.</p>
      ) : (
        <Container>
          <Row xs={1} md={2} className="g-4">
            {filteredFavorites.map((lab) => (
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

                    <div className="d-flex gap-3 align-items-center mt-3 flex-wrap">
                      <a
                        href={lab.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary text-decoration-underline fw-medium"
                      >
                        Learn More
                      </a>

                      <Button
                        variant="outline-danger"
                        className="rounded-pill"
                        onClick={() => handleRemove(lab.id)}
                      >
                        Remove from Favorites
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </PageWrapper>
  );
}