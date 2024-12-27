import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import CurrentUserContext from "../../context/CurrentUserContext";

function ClothesSection({ onCardClick, clothingItems, handleAddClick }) {
  const currentUser = useContext(CurrentUserContext);
  const userClothingItems = clothingItems.filter((item) => {
    return item.owner === currentUser._id;
  });
  return (
    <div className="clothes-section">
      <div className="clothes__section_header">
        <p className="clothes__section_title">Your item</p>
        <button
          className="clothes__section_button"
          type="button"
          onClick={handleAddClick}
        >
          +Add New
        </button>
      </div>
      <ul className="clothes__section_items">
        {userClothingItems.length !== 0 ? (
          userClothingItems.map((item) => (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          ))
        ) : (
          <p className="clothes__section_empty">You have no items yet.</p>
        )}
      </ul>
    </div>
  );
}

export default ClothesSection;
