import { useState, useEffect } from "react";
import { headerMainMenu } from "@src/data/navMenu";
import { HamburgerButton } from "@controllers/hamburger.js";

import "./HeaderMenu.css";

const HeaderMenu = () => {
  useEffect(() => {
    HamburgerButton(".hamburger",".header__list", ".header__link--regular", ".dropdow__link");
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="header__menu">
      <ul className="header__list">
        {headerMainMenu.map((item, index) => (
          <li
            key={index}
            className="header__item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.dropdown ?
            <a className="header__link header__link--dropdown" href={item.href || "#"}>
              {item.text}
            </a>
            :
            <a className="header__link  header__link--regular" href={item.href || "#"}>
            {item.text}
          </a>
          }
            {item.dropdown && showDropdown && (
              <ul className="dropdown">
                {item.submenu.map((subItem, subIndex) => (
                  <li className="dropdown__item" key={subIndex}>
                    <a className="header__link dropdow__link" href={subItem.link}>{subItem.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
