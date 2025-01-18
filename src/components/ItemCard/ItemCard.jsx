import "./ItemCard.css";
import heartIcon from "../../assets/unlike.svg";
import darkHeart from "../../assets/likeheart.svg";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const handleLike = () => {
    if (!currentUser._id) {
      return;
    }
    onCardLike({ id: item._id, isLiked: item.isLiked });
  };
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="item__card">
      <div className="item__container">
        <div className="item__button-container">
          <h2 className="item__name">{item.name}</h2>
          <button
            className={`item__like-button ${
              item.isLiked ? "item__like-button_active" : ""
            }`}
            onClick={handleLike}
          >
            <img src={item.isLiked ? darkHeart : heartIcon} alt="like button" />
          </button>
        </div>
      </div>
      <img
        onClick={handleCardClick}
        className="item__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
