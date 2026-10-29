import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Screen from "./components/general/Screen.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Screen>
      <App />
    </Screen>
  </StrictMode>,
);
