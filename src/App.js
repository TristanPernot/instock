import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Home page
import WarehouseList from "./components/WarehouseList/WarehouseList";
// Add warehouse page
import AddNewWarehouseForm from "./components/AddNewWarehouseForm/AddNewWarehouseForm";
// Edit warehouse page
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
// Import Pages
import Homepage from "./pages/Homepage/Homepage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import SingleWarehousePage from "./pages/SingleWarehousePage/SingleWarehousePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import InventoryDetail from "./pages/InventoryDetail/InventoryDetail";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import WarehouseWithInventories from "./pages/WarehouseWithInventories/WarehouseWithInventories";
import Ditailsform from './components/DetailsForm/Ditailsform';

import InventoryList from "./components/InventoryList/InventoryList";
import EditInventory from "./components/EditInventory/EditInventory";
import AddNewInventoryItem from "./pages/AddNewInventoryItem/AddNewInventoryItem";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* Header */}
        <Header />
        <Routes>
          {/* Homepage - Warehouse List */}
          <Route path="/" element={<WarehouseList />} />
          {/* Add Warehouse Page */}
          <Route path="/addWarehouse" element={<AddNewWarehouseForm />} />
          {/* Header Link to all warehouses */}
          <Route path="/inventory" element={<InventoryPage />} />
          {/* Inventories for a given warehouse */}
          <Route path="/warehouse/:id" element={<WarehouseWithInventories />} />
          {/* Edit Warehouse */}
          <Route path="/editWarehouse/:id" element={<EditWarehousePage />} />
          {/* Inventory Detail */}
          <Route path="/inventory/:id" element={<InventoryDetail />} />
          {/* Edit Inventory */}
          <Route path="/editInventory/:id"element={<EditInventory/>}/>

          <Route path="/addInventory" element={<AddInventoryPage />} />
          <Route path="/Ditailsform" element={<Ditailsform/>}/>
          <Route path="/AddNewWarehouseForm" element={<AddNewWarehouseForm/>}/>
          <Route path="/inventory/add" element={<AddNewInventoryItem />} />
          <Route path="/InventoryList"element={<InventoryList/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
