import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Logintest from './pages/Login';
import HomePage from './pages/Home';
import { Form } from 'react-bootstrap';

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
    <BrowserRouter>
      <Routes>
        <App />
        <Route path="/" element={<HomePage />} /> 
        <Route path="login" element={<Logintest />} />   
        <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );