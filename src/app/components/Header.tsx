"use client";

import React, { useState } from "react";
import "../assets/styles/header.css"; // Ensure styles are correctly imported

const Header: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("inventory");
  const [activeButton, setActiveButton] = useState("inventory"); // Tracks which button is active


  return (
    <div className="header-container">
      <h2 className="h2">
        Materials<span className="subtitle"> / Blanks</span>
      </h2>
    
      {/* Tab Buttons */}
      {/* <div className="tab-buttons"> */}
            <div className="header-button">
            <div className="container">
                <button
                    className={activeButton === "inventory" ? "active" : ""}
                    onClick={() => setActiveButton("inventory")}
                >
                    Inventory
                </button>
                <button
                    className={activeButton === "orderQueue" ? "active" : ""}
                    onClick={() => setActiveButton("orderQueue")}
                >
                    Order Queue
                </button>
            </div>
            </div>
        {/* </div> */}
    </div>
  );
};

export default Header;
