import React, { useState } from 'react';
import { headerMainMenu } from '../../../data/navMenu';
import "./nav-links.css"
const HeaderMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="header__menu">
      <div className='header__menu-panel'>
      <ul className="header__list">
        {headerMainMenu.map((item, index) => (
          <li
            key={index}
            className="header__item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a className="header__link" href={item.href || '#'}>
              {item.text}
            </a>
            {item.dropdown && showDropdown && (
              <ul className="dropdown">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a href={subItem.link}>{subItem.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default HeaderMenu;

// CSS styles should remain the same as provided in your original CSS block
