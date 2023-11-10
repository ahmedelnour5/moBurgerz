import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col min-h-screen text-black max-w-full font-poppins text-base items-center">
      <Header />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default App;
