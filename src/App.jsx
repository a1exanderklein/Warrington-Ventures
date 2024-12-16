import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-full mt-16">
        <Outlet />
      </div>
    </>
  );
}
