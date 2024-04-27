import { createRoot } from "react-dom";
import App from "./App";
import React from "react";
import { AppStateProvider } from "./AppStateContext";

const root = createRoot(document.getElementById("root"));

root.render(
  <AppStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppStateProvider>
);

