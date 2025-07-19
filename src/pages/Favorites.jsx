import React, { useContext } from "react";
import FavoritesContext from "../contexts/FavoritesContext";

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleRemove = (id) => {
    const updated = favorites.filter((lab) => lab.id !== id);
    setFavorites(updated);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Favorite Labs</h2>
      {favorites.length === 0 ? (
        <p className="text-center">No labs saved yet.</p>
      ) : (
        <div className="row">
          {favorites.map((lab) => (
            <div className="col-md-4 mb-3" key={lab.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{lab.title}</h5>
                  <p className="card-text"><strong>PI:</strong> {lab.pi}</p>
                  <p className="card-text"><strong>Eligibility:</strong> {lab.eligibility.join(", ")}</p>
                  <p className="card-text">{lab.description.slice(0, 100)}...</p>
                  <a href={lab.link} className="d-block mb-2" target="_blank" rel="noreferrer">
                    🔗 More Info
                  </a>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleRemove(lab.id)}
                  >
                    ❌ Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
