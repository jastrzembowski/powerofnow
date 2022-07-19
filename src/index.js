import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './components/Nav';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Mails from './components/Mails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/mails" element={<Mails />} />
        </Routes>
      </Router>  </React.StrictMode>
);

