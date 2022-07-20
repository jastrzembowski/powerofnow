import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Mails from "./components/Mails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/mails" element={<Mails />} />
        </Routes>
      </Router>{" "}
    </AuthProvider>{" "}
  </React.StrictMode>
);
