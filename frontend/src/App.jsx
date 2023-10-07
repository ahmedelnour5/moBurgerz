import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="grid grid-rows-my-rows  gap-5 h-screen text-black max-w-full font-sans text-lg">
      <Header />
      <div className="container mx-auto p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
