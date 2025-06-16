import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

const HomePageOverlay = () => {
  const [mode, setMode] = useState("Day");

  const toggleMode = () => {
    setMode((prev) => (prev === "Day" ? "Night" : "Day"));
  };

  // Let's say Day mode = Sun icon, Night mode = Moon icon

  const isDay = mode === "Day";

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <label
        htmlFor="mode-toggle"
        className="absolute bottom-5 right-5 flex items-center cursor-pointer pointer-events-auto"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="mode-toggle"
            className="sr-only"
            checked={isDay}
            onChange={toggleMode}
          />
          {/* Background */}
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          {/* Circle */}
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
              isDay ? "translate-x-0" : "translate-x-6"
            } flex items-center justify-center`}
          >
            {isDay ? (
              <Sun size={16} className="text-yellow-400" />
            ) : (
              <Moon size={16} className="text-blue-600" />
            )}
          </div>
        </div>
        <span className="ml-3 text-white select-none">{mode} Mode</span>
      </label>
    </div>
  );
};

export default HomePageOverlay;
