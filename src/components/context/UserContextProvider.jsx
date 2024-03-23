import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [items, setItems] = useState([
    "Home",
    "Electronics",
    "Books",
    "Music",
    "Movies",
    "Clothing",
    "Games",
    "Electronics",
    "Travel",
    "Botanical",
  ]);
  return (
    <UserContext.Provider
      value={{
        visibleItems,
        setVisibleItems,
        hiddenItems,
        setHiddenItems,
        items,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
