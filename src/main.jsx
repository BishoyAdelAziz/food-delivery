import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import StoreContextpProvider from "./Context/Storecontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreContextpProvider>
        <App />
      </StoreContextpProvider>
    </BrowserRouter>
  </React.StrictMode>
);
