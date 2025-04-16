import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Falta el componente root");
}

createRoot(root).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
