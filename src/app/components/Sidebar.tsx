'use client';

import { useRouter } from 'next/navigation'; // Next.js App Router navigation
import React, { useState } from 'react';
import '../assets/styles/Sidebar.css';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const router = useRouter(); // Next.js router

  // Function to handle item clicks (including logout)
  const handleClick = (item: string) => {
    if (item === "logout") {
      // Clear session data
      localStorage.clear();
      sessionStorage.clear();

      // Redirect to login page
      router.push("/login");
      return;
    }

    // Toggle sidebar expansion and active item
    if (activeItem === item) {
      setIsExpanded(false);
      setActiveItem(null);
    } else {
      setIsExpanded(true);
      setActiveItem(item);
    }
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      {/* Sidebar Items */}
      <ul className="list">
        <li className="list-item tally-item" onClick={() => handleClick('tally')}>
          <img src="../../../images/tally.svg" alt="Tally" className="tally-icon" />
          {isExpanded && <span className="tally-text">Tally</span>}
        </li>

        <li className={`list-item ${!isExpanded ? 'materials-item' : ''} ${activeItem === 'materials' ? 'active' : ''}`} onClick={() => handleClick('materials')}>
          <img src="../../../images/materials.svg" alt="Materials" /> 
          {isExpanded && <span>Materials</span>}
        </li>

        <li className={`list-item products-item ${activeItem === 'products' ? 'active' : ''}`} onClick={() => handleClick('products')}>
          <img src="../../../images/products.svg" alt="Products" /> 
          {isExpanded && <span>Products</span>}
        </li>

        <li className={`list-item fulfillment-item ${activeItem === 'fulfillment' ? 'active' : ''}`} onClick={() => handleClick('fulfillment')}>
          <img src="../../../images/fulfillment.svg" alt="Fulfillment" /> 
          {isExpanded && <span>Fulfillment</span>}
        </li>

        {/* Divider - Changes based on expansion */}
        <li className="list-item center-item" onClick={() => setIsExpanded(!isExpanded)}>
          <img src={isExpanded ? "../../../images/expandeddivider.svg" : "../../../images/divider.svg"} alt="divider" />
        </li>

        <li className={`list-item integrations-item ${activeItem === 'integrations' ? 'active' : ''}`} onClick={() => handleClick('integrations')}>
          <img src="../../../images/integrations.svg" alt="Integrations" /> 
          {isExpanded && <span>Integrations</span>}
        </li>
      </ul>

      {/* Bottom Section: Profile and Logout */}
      <div className="bottom-container">
        {/* Logout Button - Redirects to Login */}
        <li className="list-item logout-item" onClick={() => handleClick('logout')}>
          <img src="../../../images/logout.svg" alt="Logout" />
          {isExpanded && <span>Logout</span>}
        </li>

        {/* Profile Section - Links to LinkedIn */}
        <li className="list-item">
          <a href="https://www.linkedin.com/in/link3dinaccount/" target="_blank" rel="noopener noreferrer">
            <img src="../../../images/profile1.svg" alt="Profile" />
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
