import rocketLogo from './rocketLogo.png';
// import logo from './logo.svg';
// import './App.css';
import './routes.js';
import 'axios';
// import './pages/Home.js';
// import './pages/Login.js';
import Logintest from './pages/Logintest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rocketLogo} className="" alt="logo" width="25%" />
        <p>
          This is my new React app on my new branch !!
        </p>
        <Logintest />
        
      </header>
    </div>
  );
}

export default App;
