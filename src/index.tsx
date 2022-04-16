import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { toggleBodyDarkMode } from "utils";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

let darkModeFromCache = localStorage.getItem("darkMode");

if (
  !darkModeFromCache &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches
) {
  darkModeFromCache = "false";
  localStorage.setItem("darkMode", darkModeFromCache);
}

toggleBodyDarkMode(darkModeFromCache !== "false");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
