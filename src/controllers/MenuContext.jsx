import React, { createContext, useState } from 'react';

// Creamos el contexto
export const MenuContext = createContext();

// Proveedor del contexto que contiene el estado y la función
export const MenuProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <MenuContext.Provider value={{ isActive, toggleActive }}>
      {children}
    </MenuContext.Provider>
  );
};
