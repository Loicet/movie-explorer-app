import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#193A3C] text-[#D5E6AB] p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🎬 MovieMate</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/favorites" className="hover:underline">Favorites</Link>
      </div>
    </nav>
  );
}
