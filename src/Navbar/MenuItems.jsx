import Dropdown from "./Dropdown.jsx";
import "./Navbar.scss";
import "./MenuItem.scss";
import { ChevronDown, ChevronUp, ChevronRight } from "@carbon/icons-react";
import { useState, useEffect, useRef } from "react";

export default function MenuItems({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <button
            className={`btn-item left-option ${
              depthLevel > 0 ? "dropdown-btn-item" : ""
            }`}
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {dropdown ? (
              <ChevronUp className="icon-left-menu" />
            ) : (
              <ChevronDown className="icon-left-menu" />
            )}
            {depthLevel > 0 ? "" : <span className="arrow" />}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <button className="left-option-menu btn-item" href={items.url}>
          {items.title}
        </button>
      )}
    </li>
  );
}
