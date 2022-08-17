import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import rocketLogo from './rocketLogo.png';
// import logo from './logo.svg';
import './App.css';

import 'axios';
import Logintest from './pages/Login';
import HomePage from './pages/Home.js';





function App() {
  return (
    
      <div className="App">
        <h1>Welcome to React Router</h1>
        {/* <Routes>
          <Route path="login" element={<Logintest />} />
          <Route path="home" element={<HomePage />} />
        </Routes> */}
          <Logintest /> 
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