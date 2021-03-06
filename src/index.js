import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ArtistContextProvider } from "./context/ArtistContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ArtistContextProvider>
        <App />
      </ArtistContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
