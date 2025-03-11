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
import {
  getItems,
  addItems,
  deleteItems,
  addCardLike,
  editProfile,
  removeCardLike,
} from "../../utils/api";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getCurrentUserInfo, login, register } from "../../utils/auth";
import CurrentUserContext from "../../context/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import LoginModal from "../LoginModal/LoginModal";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleDeleteCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("delete-confirmation");
  };
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };
  const handleSignUp = () => {
    setActiveModal("sign-up");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };
  const openEditProfileModal = () => {
    setActiveModal("edit-profile");
  };

  const onAddItem = (name, imageUrl, weather, resetForm) => {
    const makeRequest = () =>
      addItems({ name, imageUrl, weather }).then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        resetForm();
      });
    handleSubmit(makeRequest);
  };

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(closeActiveModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const onLogin = ({ email, password }) => {
    const makeRequest = () =>
      // setIsLoading(true);
      login({ email, password }).then((data) => {
        localStorage.setItem("jwt", data.token);
        handleGetUserData();
        closeActiveModal();
      });
    handleSubmit(makeRequest);
  };

  const handleDeleteCard = (id) => {
    const makeRequest = () =>
      deleteItems(id).then(() => {
        setClothingItems((items) => items.filter((item) => item._id !== id));
        closeActiveModal();
      });
    handleSubmit(makeRequest);
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

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getCurrentUserInfo(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch(console.error);
    }
  }, []);

  const handleGetUserData = () => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    getCurrentUserInfo(token).then((userData) => {
      setCurrentUser(userData);
      setIsLoggedIn(true);
    });
  };

  const handleRegister = ({ name, avatar, email, password }) => {
    setIsLoading(true);
    register({ name, avatar, email, password }).then(() => {
      return onLogin({ email, password });
    });
    handleSubmit();
  };

  const handleEditProfile = ({ name, avatar }) => {
    setIsLoading(true);
    editProfile({ name, avatar }).then((updateUser) => {
      setCurrentUser(updateUser);
      closeActiveModal();
    });
    handleSubmit();
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    if (!isLiked) {
      addCardLike(id, token)
        .then((updatedCard) => {
          console.log(clothingItems, updatedCard);
          setClothingItems((cards) =>
            cards.map((item) =>
              item._id === id ? { ...updatedCard.data } : item
            )
          );
        })
        .catch((err) => console.log(err));
    } else {
      removeCardLike(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) =>
              item._id === id ? { ...updatedCard.data } : item
            )
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleLoginModal={openLoginModal}
              isLoggedIn={isLoggedIn}
              handleSignUp={handleSignUp}
              handleSignOut={handleSignOut}
              handleEditProfile={handleEditProfile}
              openEditProfileModal={openEditProfileModal}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      closeActiveModal={closeActiveModal}
                      clothingItems={clothingItems}
                      onAddItem={onAddItem}
                      onCardLike={handleCardLike}
                      handleAddClick={handleAddClick}
                      handleSignOut={handleSignOut}
                      handleEditProfile={handleEditProfile}
                      openEditProfileModal={openEditProfileModal}
                    />
                  </ProtectedRoute>
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
          <RegisterModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "sign-up"}
            isLoading={isLoading}
            openLoginModal={openLoginModal}
            handleSignUp={handleSignUp}
            handleRegister={handleRegister}
          />
          <Footer />
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            closeActiveModal={closeActiveModal}
            onAddItem={onAddItem}
            isLoading={isLoading}
          />
          <EditProfileModal
            closeActiveModal={closeActiveModal}
            isOpen={activeModal === "edit-profile"}
            handleEditProfile={handleEditProfile}
            isLoading={isLoading}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            closeActiveModal={closeActiveModal}
            onLogin={onLogin}
            setActiveModal={setActiveModal}
            onRegisterButtonClick={handleSignUp}
          />
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
