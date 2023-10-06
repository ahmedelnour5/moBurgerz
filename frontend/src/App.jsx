import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="grid grid-rows-my-rows  gap-3 h-screen bg-slate-50 max-w-full font-sans text-lg">
      <Header />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
