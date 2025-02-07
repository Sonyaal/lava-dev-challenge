'use client';

import React, { useState } from 'react';
import '../assets/styles/Sidebar.css';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Function to handle item click: toggle expansion and highlight item
  const handleClick = (item: string) => {
    if (activeItem === item) {
      setIsExpanded(false); // Collapse sidebar if same item is clicked
      setActiveItem(null);
    } else {
      setIsExpanded(true); // Expand sidebar and set active item
      setActiveItem(item);
    }
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      {/* Sidebar Items */}
      <ul className="list">
        <li 
          className="list-item tally-item"
          onClick={() => handleClick('tally')}
        >
          <img src="../../../tally.svg" alt="Tally" className="tally-icon"/>
          {isExpanded && <span className="tally-text">Tally</span>}
        </li>
        <li 
          className={`list-item materials-item ${activeItem === 'materials' ? 'active' : ''}`}
          onClick={() => handleClick('materials')}
        >
          <img src="../../../materials.svg" alt="Materials" /> 
          {isExpanded && <span>Materials</span>}
        </li>
        <li 
          className={`list-item products-item ${activeItem === 'products' ? 'active' : ''}`}
          onClick={() => handleClick('products')}
        >
          <img src="../../../products.svg" alt="Products" /> 
          {isExpanded && <span>Products</span>}
        </li>
        <li 
          className={`list-item fulfillment-item ${activeItem === 'fulfillment' ? 'active' : ''}`}
          onClick={() => handleClick('fulfillment')}
          >
          <img src="../../../fulfillment.svg" alt="Fulfillment" /> 
          {isExpanded && <span>Fulfillment</span>}
        </li>

        {/* Divider Item - Change image based on expansion */}
        <li className="list-item center-item" onClick={() => setIsExpanded(!isExpanded)}>
          <img src={isExpanded ? "../../../expandeddivider.svg" : "../../../divider.svg"} alt="divider"/>
        </li>
        <li 
          className={`list-item integrations-item ${activeItem === 'integrations' ? 'active' : ''}`}
          onClick={() => handleClick('integrations')}
        >
          <img src="../../../integrations.svg" alt="Integrations" /> 
          {isExpanded && <span>Integrations</span>}
        </li>
      </ul>

      {/* Bottom Profile and Logout */}
      <div className="bottom-container">
        <li className="list-item logout-item" onClick={() => handleClick('logout')}>
            <img src="../../../logout.svg" alt="Logout"/>
            {isExpanded && <span>Logout</span>}
          </li>
          <li className="list-item">
            <a href="https://www.linkedin.com/in/link3dinaccount/" target="_blank" rel="noopener noreferrer">
            <img src="../../../profile1.svg" alt="Profile"/>
            </a>
            {isExpanded && (
              <div>
                <div><b>Don't Ruin It</b></div>
                <div>Pro Crafter</div>
              </div>
            )}
          </li>
        </div>
    </div> 
  );
};

export default Sidebar;
