import "./ItemCard.css";
function ItemCard({ item, onCardClick, onCardLike }) {
  const handleLike = () => {
    onCardLike({ id: card._id, isLiked: card.isLiked });
  };
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="item__card">
      <h2 className="item__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="item__image"
        src={item.imageUrl}
        alt={item.name}
      />
      <button
        className={`item__like-button ${
          item.isLiked ? "item__like-button_active" : ""
        }`}
        onClick={handleLike}
      >
        {item.isLiked ? "Unlike" : "Like"}
      </button>
    </li>
  );
}

export default ItemCard;
