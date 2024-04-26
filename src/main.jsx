import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import { Provider } from "react-redux";
import { persistor, store } from "src/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider>
          <Router basename="/">
            <App />
          </Router>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
