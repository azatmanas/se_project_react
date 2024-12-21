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
import RegisterModal from "../RegisterModal/RegisterModal";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const openRegister = () => {
    setActiveModal();
  };

  const openLoginModal = (e) => {
    e.preventDefault();
    setActiveModal();
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const onAddItem = (name, imageUrl, weather, restForm) => {
    setIsLoading(true);
    addItems({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
        restForm();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleDeleteCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("delete-confirmation");
  };

  const handleDeleteCard = (id) => {
    deleteItems(id)
      .then(() => {
        setClothingItems((items) => items.filter((item) => item._id !== id));
        closeActiveModal();
      })
      .catch(console.error);
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

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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
          isOpen={activeModal === "preview"}
          closeActiveModal={closeActiveModal}
          card={selectedCard}
          onDelete={handleDeleteCardClick}
        />
        <ConfirmationModal
          isOpen={activeModal === "delete-confirmation"}
          closeActiveModal={closeActiveModal}
          handleDeleteCard={handleDeleteCard}
          selectedCard={selectedCard}
        />
        <RegisterModal closeActiveModal={closeActiveModal} />
        <Footer />
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          closeActiveModal={closeActiveModal}
          onAddItem={onAddItem}
          isLoading={isLoading}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
