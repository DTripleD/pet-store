import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider>
      <Router basename="/">
        <App />
      </Router>
    </StyledEngineProvider>
  </React.StrictMode>
);
