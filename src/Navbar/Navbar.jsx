import topLogoNavbar from "../assets/top-logo-navbar.png";
import "./Navbar.scss";
import MenuItems from "./MenuItems.jsx";
import MenuItemRightSide from "./MenuItemRightSide.jsx";
import { menuItems } from "./ListMenuItems.js";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-side">
        <div className="logo left-option">
          <img src={topLogoNavbar} className="logo" alt="logo" />
        </div>
        <nav>
          <ul className="items">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
            })}
          </ul>
        </nav>
      </div>
      <div className="right-side">
        <MenuItemRightSide />
      </div>
    </div>
  );
}
