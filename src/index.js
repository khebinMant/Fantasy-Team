import React from "react";
import ReactDOM from "react-dom/client";
import { MainRouter } from "./router/MainRouter";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "animate.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(
  document.getElementById("root") || document.createElement("div")
);
root.render(
  // <React.StrictMode>

  <App />

  // </React.StrictMode>
);
