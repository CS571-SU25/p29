// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-start">
        {/* Text Content */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold text-dark">Explore Research Opportunities</h1>
          <p className="lead mt-3 mb-4 text-muted">
            Connect with labs, find mentors, and gain real experience that aligns with your academic goals.
          </p>
          <Link to="/directory" className="btn btn-primary btn-lg">
            Browse Labs
          </Link>
        </div>

        {/* Image */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3534/3534097.png"
            alt="Lab icon"
            className="img-fluid"
            style={{ maxHeight: '250px' }}
          />

        </div>
      </div>
    </div>
  );
}


