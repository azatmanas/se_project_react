import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ onCardClick, clothingItems, handleAddClick }) {
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
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
