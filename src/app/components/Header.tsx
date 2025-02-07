"use client";

import React from "react";
import "../assets/styles/Header.css"; // Ensure styles are correctly imported

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="header-container">
      <h2 className="h2">
        Materials<span className="subtitle"> / Blanks</span>
      </h2>

      {/* Tab Buttons */}
      <div className="header-button">
        <div className="container">
          <button
            className={activeTab === "inventory" ? "active" : ""}
            onClick={() => setActiveTab("inventory")}
          >
            Inventory
          </button>
          <button
            className={activeTab === "orderQueue" ? "active" : ""}
            onClick={() => setActiveTab("orderQueue")}
          >
            Order Queue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
