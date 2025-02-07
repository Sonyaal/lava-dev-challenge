"use client";

import { useState } from "react";
import "../assets/styles/Inventory.css"; 

type InventoryItem = {
  id: number;
  name: string;
  stock: number;
  image: string;
};

const inventoryItems: InventoryItem[] = [
  { id: 1, name: "Gildan T-Shirt - Red / M", stock: 13, image: "../../../images/tshirt-red.svg" },
  { id: 2, name: "Gildan T-Shirt - Red / L", stock: 46, image: "../../../images/tshirt-red.svg" },
  { id: 3, name: "Gildan T-Shirt - Black / S", stock: 21, image: "../../../images/tshirt-black.svg" },
  { id: 4, name: "Gildan T-Shirt - Black / M", stock: 34, image: "../../../images/tshirt-black.svg" },
  { id: 5, name: "Gildan T-Shirt - Black / L", stock: 27, image: "../../../images/tshirt-black.svg" },
  { id: 6, name: "Gildan T-Shirt - White / S", stock: 34, image: "../../../images/tshirt-white.svg" },
  { id: 7, name: "Gildan T-Shirt - White / M", stock: 51, image: "../../../images/tshirt-white.svg" },
  { id: 8, name: "Gildan T-Shirt - White / L", stock: 29, image: "../../../images/tshirt-white.svg" },
];

export default function Inventory() {
  const [items, setItems] = useState<InventoryItem[]>(inventoryItems);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleIncrease = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, stock: Number(item.stock) + 1 } : item
    ));
  };

  const handleDecrease = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, stock: Math.max(Number(item.stock) - 1, 0) } : item
    ));
  };

  const filteredItems = searchQuery
    ? items.filter(item => item.name.toLowerCase() === searchQuery.toLowerCase())
    : items;

  return (
    <div className="inventory-container">
      <div className="header-container">
        {/* Search Bar */}
        <div className="search-container">
          {/* Search Icon */}
          <img src="../../../images/search.svg" alt="Search" className="search-icon" />
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Materials"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter / Sort Icons */}
        <div className="search-icons">
          <img src="../../../images/filter.svg" alt="Filter" />
          <img src="../../../images/sort.svg" alt="Sort" />
        </div>

        {/* Add New Button */}
        <div className="add-button">
          <button>+ Add New</button>
        </div>
      </div>

      {/* Inventory List */}
      <div className="inventory-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="inventory-item">
              {/* Product Name */}
              <div className="product-info">
                <img src={item.image} alt={item.name} />
                <span className="product-name">{item.name}</span>
              </div>

              {/* Stock Counter */}
              <div className="stock-counter">
                <button onClick={() => handleDecrease(item.id)} style={{ background: "none", border: "none", cursor: "pointer",  justifyContent: "center"}}>
                  <img src="../../../images/minus-icon.svg" alt="Decrease" width="24" height="24" />
                </button>

                <div className={`stock-display ${item.stock <= 24 ? "low-stock" : ""}`}>
                  <div className="stock-main">{item.stock}</div>
                  <div className="stock-sub">24 PCS</div>
                </div>

                <button onClick={() => handleIncrease(item.id)} style={{ background: "none", border: "none", cursor: "pointer",  justifyContent: "center" }}>
                  <img src="../../../images/plus-icon.svg" alt="Increase" width="24" height="24" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No matching items found.</p>
        )}
      </div>
    </div>
  );
}
