"use client"; // Ensures it runs on the client side

import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import Inventory from "@/app/components/Inventory";
import Header from "@/app/components/Header";
import OrderQueue from "@/app/components/OrderQueue";

export default function Home() {
  const [activeTab, setActiveTab] = useState("inventory"); // Default to inventory

  return (
    // <div>
      <body style={{ margin: 0}}>
      <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ marginLeft: '250px', padding: '20px', flex: 1 }}>
            {/* Pass state to Header */}
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Conditionally render Inventory or OrderQueue */}
            {activeTab === "inventory" ? <Inventory /> : <OrderQueue />}
        </div> 
      </div>
      </body>
    // </div>
  );
}

