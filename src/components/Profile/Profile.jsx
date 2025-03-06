import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  handleAddClick,
  onAddItem,
  onCardLike,
  openEditProfileModal,
  handleSignOut,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          openEditProfileModal={openEditProfileModal}
          handleSignOut={handleSignOut}
        />
      </section>
      <section className="profile__clothing-item">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          handleAddClick={handleAddClick}
          onAddItem={onAddItem}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
