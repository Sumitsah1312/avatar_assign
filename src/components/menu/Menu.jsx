import React, { useState, useEffect, useContext } from "react";
import "./styleMenu.css";
import Logo from "/logom.svg";
import Dropdown from "./Dropdown";
import UserContext from "../context/userContext";

const MainMenu = () => {
  const { visibleItems, setVisibleItems, hiddenItems, setHiddenItems, items } =
    useContext(UserContext);

  useEffect(() => {
    console.log("in effect");
    updateMenu();
    window.addEventListener("resize", updateMenu);
    return () => {
      window.removeEventListener("resize", updateMenu);
    };
  }, []);

  const updateMenu = () => {
    console.log("in function");
    const menuWidth = document.getElementById("menu_items").offsetWidth;
    const menuItemWidth = 70; 
    const maxVisibleItems = Math.floor(menuWidth / menuItemWidth);
    setVisibleItems(items.slice(0, maxVisibleItems));
    setHiddenItems(items.slice(maxVisibleItems));
  };

  return (
    <>
      <nav id="main-menu" class="block">
        <div class="log">
          <img src={Logo} alt="" />
          E-COMM
        </div>

        <div id="menu_items">
          {visibleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>

        <div>
          <Dropdown />
        </div>
        <div class="search-container">
          <i class="fa fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search Something"
            class="search-input"
          />
        </div>
      </nav>
    </>
  );
};

export default MainMenu;
