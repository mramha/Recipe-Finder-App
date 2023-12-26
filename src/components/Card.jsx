// Card.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card({ recipe, trash, like, onDelete }) {
  const { id, title, image } = recipe;
  const [isLiked, setIsLiked] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  const [showTrash, setShowTrash] = useState(false);

  useEffect(() => {
    setShowTrash(trash);
  }, [trash]);

  useEffect(() => {
    setShowLiked(like);
  }, [like]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeLiked = storedFavorites.some(
      (favorite) => favorite.id === id
    );
    setIsLiked(isRecipeLiked);
  }, [id]);

  const handleLikeClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isLiked) {
      showAlreadyLikedAlert();
      return;
    }

    const updatedFavorites = [...storedFavorites, { id, title, image }];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsLiked(true);

    showLikeAlert();
  };

  const handleTrashClick = () => {
    const isConfirmed = window.confirm(
      "Are you sure? You won't be able to revert this!"
    );

    if (isConfirmed) {
      onDelete(id);
      const deleteAlertText = "Your recipe has been deleted.";
      alert(deleteAlertText);
    }
  };

  const showLikeAlert = () => {
    const alertText = "Added to favorites";
    alert(alertText);
  };

  const showAlreadyLikedAlert = () => {
    const alertText = "This recipe is already in favorites";
    alert(alertText);
  };

  return (
    <div className="card1">
      {image ? <img src={image} alt={title} /> : <p>Image not available</p>}
      <div className="box">
        <p className="title">{title}</p>
        <Link
          to={{ pathname: `/details/${id}` }}
          className="btn border border-black rounded-pill text-white"
        >
          Show more
        </Link>

        <button
          style={{ all: "unset" }}
          className={`heart-btn ${isLiked ? "text-danger" : "text-white"} ${
            showLiked ? "" : "d-none"
          }`}
          onClick={handleLikeClick}
        ></button>
        <button
          style={{ all: "unset" }}
          className={`trash-btn text-danger ${showTrash ? "" : "d-none"}`}
          onClick={handleTrashClick}
        ></button>
      </div>
    </div>
  );
}
