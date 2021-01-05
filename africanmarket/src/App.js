import './App.css';
// import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
          <Register />
      </div>
    </Router>
  );
}

export default App;
