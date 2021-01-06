import './App.css';
// import Login from './components/Login';
import OwnerRegister from './components/OwnerRegister';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />

      </div>
    </Router>
  );
}

export default App;