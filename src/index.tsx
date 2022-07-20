import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import GlobalStyle from "../src/styles/global";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <ToastContainer />
  </React.StrictMode>
);
