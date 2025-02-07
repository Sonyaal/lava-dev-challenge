"use client"; // Ensures it runs on the client side

import { useState } from "react";
import Inventory from "@/app/components/Inventory";
import Header from "@/app/components/Header";
import OrderQueue from "@/app/components/OrderQueue";

export default function Home() {
  const [activeTab, setActiveTab] = useState("inventory"); // Default to inventory

  return (
    <div>
      {/* Pass state to Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Conditionally render Inventory or OrderQueue */}
      {activeTab === "inventory" ? <Inventory /> : <OrderQueue />}
    </div>
  );
}

