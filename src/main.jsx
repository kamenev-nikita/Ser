import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./style/reset.css";
import "./style/main.css";
import "./style/variables.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
