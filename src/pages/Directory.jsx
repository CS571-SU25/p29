import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import FavoritesContext from "../contexts/FavoritesContext";
import labsData from "../data/labs.json";
import { Container, Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import PageWrapper from "../pages/PageWrapper";

export default function Directory() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [labs, setLabs] = useState(labsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMS, setFilterMS] = useState(false);
  const [filterPhD, setFilterPhD] = useState(false);
  const [filterFunding, setFilterFunding] = useState(false);

  const location = useLocation();
  const isNavbarFixed = location.pathname !== "/directory";

  const handleSave = (lab) => {
    setFavorites((prev) => [...prev, lab]);
    setLabs((prevLabs) => prevLabs.filter((l) => l.id !== lab.id));
  };

  const matchesFilters = (lab) => {
    const text = `${lab.title} ${lab.pi} ${lab.eligibility.join(" ")} ${lab.funding} ${lab.description}`.toLowerCase();

    const matchSearch = text.includes(searchTerm.toLowerCase());
    const matchMS = !filterMS || lab.eligibility.includes("MS");
    const matchPhD = !filterPhD || lab.eligibility.includes("PhD");
    const matchFunding = !filterFunding || lab.funding.toLowerCase().includes("funding");

    return matchSearch && matchMS && matchPhD && matchFunding;
  };

  const filteredLabs = labs.filter(matchesFilters);

  return (
    <PageWrapper>
      <h1 className="text-center mb-4">Research Directory</h1>

      {/* Search bar */}
      <div className="d-flex justify-content-center mb-3">
        <InputGroup style={{ maxWidth: "700px" }}>
          <InputGroup.Text><FaSearch /></InputGroup.Text>
          <Form.Control
            placeholder="Search by title, PI, eligibility, funding, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </div>

      {/* Filters */}
      <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
        <Form.Check
          type="checkbox"
          label="MS Eligible"
          checked={filterMS}
          onChange={(e) => setFilterMS(e.target.checked)}
        />
        <Form.Check
          type="checkbox"
          label="PhD Eligible"
          checked={filterPhD}
          onChange={(e) => setFilterPhD(e.target.checked)}
        />
        <Form.Check
          type="checkbox"
          label="RA Funding"
          checked={filterFunding}
          onChange={(e) => setFilterFunding(e.target.checked)}
        />
      </div>

      {/* Lab cards */}
      <Row xs={1} md={2} className="g-4">
        {filteredLabs.map((lab) => (
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
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                  <a
                    href={lab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#007bff", textDecoration: "underline", fontWeight: "500" }}
                  >
                    Learn More
                  </a>
                  <Button variant="primary" className="rounded-pill" onClick={() => handleSave(lab)}>
                    Save to Favorites
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </PageWrapper>
  );
}
