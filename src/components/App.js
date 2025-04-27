import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const BASE_URL = "http://localhost:6001/plants";

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function toggleSoldOut(id) {
    setPlants(
      plants.map((plant) =>
        plant.id === id ? { ...plant, isSoldOut: !plant.isSoldOut } : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="app">
      <Header />
      <PlantPage />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants} onToggleSoldOut={toggleSoldOut} />
    </div>
  );
}

export default App;
