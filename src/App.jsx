import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path as needed

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-full mt-16 p-4">
        <Outlet />
      </div>
    </>
  );
}
