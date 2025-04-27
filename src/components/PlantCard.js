import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOut() {
    const updatedPlant = { ...plant, soldOut: !isSoldOut };
    setIsSoldOut(!isSoldOut);
    onUpdatePlant(updatedPlant);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={isSoldOut ? "primary" : ""} onClick={handleSoldOut}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
