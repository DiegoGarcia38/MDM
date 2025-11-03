import { Code, Menu, X } from "lucide-react";
import React, { useState } from "react";

export default function Navbar({ screens, currentScreen, setCurrentScreen, userProgress }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Code className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Metadatos: datos sobre datos</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="w-48 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{ width: `${(userProgress / 6) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-500">{Math.round((userProgress / 6) * 100)}%</span>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="bg-gray-50 p-4 space-y-2">
          {Object.entries(screens).map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setCurrentScreen(key);
                setMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg ${
                currentScreen === key ? "bg-blue-600 text-white" : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
