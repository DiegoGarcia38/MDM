import React from "react";
import { HelpCircle } from "lucide-react";

export default function HelpButton({ setCurrentScreen }) {
  return (
    <button
      onClick={() => setCurrentScreen("help")}
      className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
      title="Centro de ayuda"
    >
      <HelpCircle className="w-6 h-6" />
    </button>
  );
}
