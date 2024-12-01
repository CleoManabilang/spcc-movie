// src/components/Modal.js
import React from 'react';

const Modal = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>&times;</span>
          <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600?text=No+Poster"}
          alt={movie.Title}
        />
         <h2>{movie.Title}</h2>
         <p><strong>Year:</strong> {movie.Year}</p>
      </div>
    </div>
  );
};

export default Modal;
