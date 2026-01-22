import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase-config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider> */}
  </StrictMode>,
);
