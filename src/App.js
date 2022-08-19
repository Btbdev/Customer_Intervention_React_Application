import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import rocketLogo from './rocketLogo.png';
import './App.css';

import Logintest from './pages/Login';
import HomePage from './pages/Home';
import Form from './pages/Form'

function App() {
  return (
    <div className="App">
      <header>
        <img src={rocketLogo} className="App-logo" alt="logo" />
      </header>
      <Routes>
        <Route path="/" element={<Logintest />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;