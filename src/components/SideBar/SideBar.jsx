import avatar from "../../assets/avatar1.png";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__username">Azat Manas</p>
    </div>
  );
}

export default SideBar;
