import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Import Components
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import WarehouseList from './components/WarehouseList/WarehouseList';
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
  
      </header>
      <WarehouseList />
    </div>
  );
}

export default App;
