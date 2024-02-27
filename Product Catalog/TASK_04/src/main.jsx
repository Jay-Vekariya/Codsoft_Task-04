import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Addtocard from "./Components/AddtoCart.jsx";
import Product_Catalog from "./Components/Product_Catalog.jsx";
import ContextPage from "./Components/ContextPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextPage>
        <Routes>
          <Route path="/" element={<Product_Catalog />} />
          <Route path="/Addtocard" element={<Addtocard />} />
        </Routes>
      </ContextPage>
    </BrowserRouter>
  </React.StrictMode>
);
