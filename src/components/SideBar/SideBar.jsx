import avatar from "../../assets/avatar1.png";
import "./SideBar.css";

function SideBar({ openEditProfileModal, handleSignOut }) {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__username">Azat Manas</p>
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
