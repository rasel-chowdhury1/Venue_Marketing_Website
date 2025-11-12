// src/App.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="font-sans antialiased bg-white min-h-screen">
      <Outlet /> 
    </div>
  );
};

export default App;
