import "./ItemCard.css";
import heartIcon from "../../assets/unlike.svg";
import darkHeart from "../../assets/likeheart.svg";
function ItemCard({ item, onCardClick, onCardLike }) {
  const handleLike = () => {
    onCardLike({ id, isLiked });
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

  function newFunction() {
    onCardLike({ id: item._id, isLiked: item.isLiked });
  }
}

export default ItemCard;
