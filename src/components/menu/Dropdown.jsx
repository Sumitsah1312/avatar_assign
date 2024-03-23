import React, { useState,useContext } from "react";
import "./Dropdown.css";
import UserContext from "../context/userContext";
const Dropdown = () => {
  const {hiddenItems}=useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="dropdown-container">
      <button
        className="dropdown-button"
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(isOpen);
        }}
      >
        More
      </button>
      </div>
      {isOpen && (
         <div className="dropdown">
         {hiddenItems.map((item, index) => (
           <div
             key={index}
             className="option"
           >
             {item}
           </div>
         ))}
       </div>
      )}

    
    </div>
  );
};

export default Dropdown;
