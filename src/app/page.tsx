import Image from "next/image";
import Sidebar from "@/app/components/Sidebar"; // Importing the Sidebar component
import Header from "@/app/components/Header"; // Importing the Sidebar component

export default function Home() {
  return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          {/* <Header /> */}
        </div>
      </div>
  );
}