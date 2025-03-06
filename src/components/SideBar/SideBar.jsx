import avatar from "../../assets/avatar1.png";
import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function SideBar({ openEditProfileModal, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={currentUser.avatar} alt="avatar" />
      <p className="sidebar__username">{currentUser.name}</p>
      <div className="sidebar__menu">
        <button
          onClick={openEditProfileModal}
          type="button"
          className="sidebar__edit"
        >
          Edit Profile
        </button>
        <button
          onClick={handleSignOut}
          type="button"
          className=" sidebar__signout"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
