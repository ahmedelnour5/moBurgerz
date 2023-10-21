import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="grid grid-rows-my-rows min-h-screen text-black max-w-full font-sans text-lg">
      <Header />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default App;
