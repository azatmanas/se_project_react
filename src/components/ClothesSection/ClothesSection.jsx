import { defaultClothingItems } from "../../utils/constants";
function ClothesSection({ handleCardClick }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Your item</p>
        <button>+Add New</button>
      </div>
      <ul className="clothes-section-items">
        {defaultClothingItems.map((item) => {
          <ItemCard
            key={item._id}
            item={item}
            handleCardClick={handleCardClick}
          />;
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
