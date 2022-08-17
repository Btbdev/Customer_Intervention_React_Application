import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Logintest from './pages/Login';
import HomePage from './pages/Home';

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Logintest />}>
          <Route path="home" element={<HomePage />}>
          </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );