import * as React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./App";
import "./index.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Pages are pre-rendered at build time (scripts/prerender.mjs); hydrate them, or render fresh in dev.
if (rootEl.childElementCount > 0) hydrateRoot(rootEl, app);
else createRoot(rootEl).render(app);
