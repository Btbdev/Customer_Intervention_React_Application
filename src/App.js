import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import rocketLogo from './rocketLogo.png';
// import logo from './logo.svg';
import './App.css';

import axios from 'axios';
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


// function App() {
//   return (
//     <BrowserRouter>
//       <Router>
//       <div className="App">
        
//           <Route path="/" element={ <Logintest /> } />
//           <Route path="home" element={ <Home /> } />

        
//         <header className="App-header"> */}
//           <img src={rocketLogo} className="" alt="logo" width="25%" />
//           <p>
//             This is my new React app on my new branch !!
//           </p>
//           <Logintest />
//           <Home />
        
//         </header> 
//       </div>
        
//     //   </Router>
//     // </BrowserRouter>
//   );
// }