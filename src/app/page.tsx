"use client"; // Ensures it runs on the client side

import Inventory from "@/app/components/Inventory";
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div>
    <div><Header /></div>
    <div><Inventory /></div>
  </div>
  );
}

