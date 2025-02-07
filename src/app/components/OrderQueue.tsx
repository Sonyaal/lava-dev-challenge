"use client";

import "../assets/styles/Inventory.css";
import "../assets/styles/OrderQueue.css"; 

export default function Inventory() {
  return (
    <div className="inventory-container">

    <div className="header-container">
    {/* Search Bar */}
    <div className="search-container">
        {/* Search Icon on the Left */}
        <img src="../../../search.svg" alt="Search" className="search-icon" />

        {/* Search Input */}
        <input type="text" placeholder="Search Materials" />
    </div>
    {/* Filter & Sort Icons on the Right */}
    <div className="search-icons">
        <img src="../../../filter.svg" alt="Filter" />
        <img src="../../../sort.svg" alt="Sort" />
    </div>
    </div>
      <div className="inventory-list">
          <div className="inventory-item">
            <div className="product-info-container">
                <img src="../../../tshirt-black.svg" alt="Gildan T-Shirt - Red / M" />
            <span className="product-name"><b>(9)</b> Gildan T-Shirt - Black / S </span>
            <span className="status-text-processing">Status: Processing...</span>
            </div>
          </div>
          <div className="inventory-item">
            <div className="product-info-container">
                <img src="../../../tshirt-red.svg" alt="Gildan T-Shirt - Red / M" />
            <span className="product-name"><b>(4)</b> Gildan T-Shirt - Red / M </span>
            <span className="status-text-processing">Status: Processing...</span>
            </div>
          </div>
          <div className="inventory-item">
            <div className="product-info-container">
                <img src="../../../tshirt-white.svg" alt="Gildan T-Shirt - White / L" />
            <span className="product-name"><b>(7)</b> Gildan T-Shirt - White / L </span>
            <span className="status-text-complete">Status: Completed!</span>
            </div>
          </div>
      </div>
    </div>
  );
}
