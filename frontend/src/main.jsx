import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Landing from "./Pages/Landing.jsx";
import Menu from "./Pages/Menu.jsx";
import Order from "./Pages/Order.jsx";
import ShoppingCartProvider from "./Context/ShoppingCartContext.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Success from "./Pages/Success.jsx";
import Cancel from "./Pages/Cancel.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ShoppingCartProvider />}>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<Landing />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Cancel" element={<Cancel />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
