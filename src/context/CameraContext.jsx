import React, { createContext, useContext, useState } from "react";

const CameraContext = createContext();

export const useCameraContext = () => useContext(CameraContext);

export const CameraProvider = ({ children }) => {
  const [clickedNumber, setClickedNumber] = useState(null);

  return (
    <CameraContext.Provider value={{ clickedNumber, setClickedNumber }}>
      {children}
    </CameraContext.Provider>
  );
};