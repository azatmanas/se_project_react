import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, addItems, deleteItems } from "../../utils/api";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal();
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const onAddItem = (item) => {
    addItems(item)
      .then((newItem) => setClothingItems([newItem, ...setClothingItems]))
      .catch(console.error);
  };

  const handleDeleteItem = (id) => {
    deleteItems(id).then(() => {
      setClothingItems((items) => items.filter((item) => item.id !== id)).catch(
        console.error
      );
    });
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => setClothingItems(data))
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Profile
                  onCardClick={handleCardClick}
                  closeActiveModal={closeActiveModal}
                  clothingItems={clothingItems}
                  onAddItem={onAddItem}
                  handleAddClick={handleAddClick}
                />
              }
            ></Route>
          </Routes>
        </div>

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
          onDelete={handleDeleteItem}
        />
        <ConfirmationModal
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
          handleDeleteItem={handleDeleteItem}
          selectedCard={selectedCard}
        />
        <Footer />
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          closeActiveModal={closeActiveModal}
          activeModal={activeModal}
          onAddItem={onAddItem}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
