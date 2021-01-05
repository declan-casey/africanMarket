import './App.css';
// import Login from './components/Login';
import OwnerRegister from './components/OwnerRegister';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Header />
        <OwnerRegister />
      </div>
    </Router>
  );
}

export default App;
