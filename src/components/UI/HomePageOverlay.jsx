import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useCameraContext } from "../../context/CameraContext";

const HomePageOverlay = () => {
  const [mode, setMode] = useState("Day");
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { setClickedNumber } = useCameraContext();

  const fullText =
    "💡 Click on the numbers in the scene to view more information.";

  const toggleMode = () => {
    setMode((prev) => (prev === "Day" ? "Night" : "Day"));
  };

  const isDay = mode === "Day";

  // Popup appearance and typing animation effect
  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowPopup(true), 100);
    }, 1000);

    return () => clearTimeout(popupTimer);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!showPopup) return;

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [showPopup]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Number Buttons Top-Left */}
      <div className="absolute top-4 left-4 flex gap-3 pointer-events-auto">
        {[0, 1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setClickedNumber(num)}
            className="w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-full shadow-lg text-lg font-semibold transition-all duration-200"
          >
            {num}
          </button>
        ))}
      </div>

      {/* Mode Toggle Bottom-Right */}
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
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
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

      {/* Instruction Popup Bottom-Left */}
      {isVisible && (
        <div
          className={`fixed bottom-5 left-5 bg-gradient-to-r from-white-600 to-grey-600 text-black px-6 py-4 rounded-lg shadow-2xl text-sm pointer-events-auto select-none border border-white border-opacity-20 backdrop-blur-sm transform transition-all duration-500 ease-out ${
            showPopup
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 translate-y-4"
          }`}
          style={{ maxWidth: 280, minHeight: 50 }}
        >
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg"></div>

          <button
            onClick={() => {
              setShowPopup(false);
              setTimeout(() => setIsVisible(false), 300);
            }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold transition-colors duration-200 shadow-lg"
          >
            ×
          </button>

          <div className="pr-4">
            <span>
              {displayText.split(" ").map((word, index) =>
                word === "numbers" ? (
                  <span key={index} className="font-bold text-black">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </span>
            {showCursor && (
              <span className="animate-pulse text-yellow-300 ml-1 font-bold">
                |
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageOverlay;
