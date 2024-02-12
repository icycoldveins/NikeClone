import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NikeWebsite from "./Nike.jsx";
import "/src/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <NikeWebsite></NikeWebsite>
  </React.StrictMode>
);
