import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/styles.css";
import AppRouter from "./router/AppRouter";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Falta el componente root");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
