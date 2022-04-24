import logo from './logo.svg';
import './App.css';
import "./components/NavBar";
import NavBar from './components/NavBar';
import Cart from "./components/cartWidget";
import Bienvenida from './components/ItemListContainer';
import Cards from './components/Cards';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Bienvenida />
      <Cards />
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
