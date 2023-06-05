import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Import Components
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
// Import Pages
import Homepage from './pages/Homepage/Homepage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import SingleWarehousePage from './pages/SingleWarehousePage/SingleWarehousePage';
import SingleInventoryPage from './pages/SingleInventoryPage/SingleInventoryPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage';
import AddInventoryPage from './pages/AddInventoryPage/AddInventoryPage';
// App Components
function App() {
  return (
    <div className="App">
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
        <WareHouseList />
      </header>
    </div>
  );
}

export default App;
