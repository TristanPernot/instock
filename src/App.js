import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseList from "./components/WarehouseList/WarehouseList";
// Import Pages
import Homepage from "./pages/Homepage/Homepage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import SingleWarehousePage from "./pages/SingleWarehousePage/SingleWarehousePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import InventoryDetail from "./pages/InventoryDetail/InventoryDetail";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import WarehouseWithInventories from "./pages/WarehouseWithInventories/WarehouseWithInventories";
// import Ditailsform from './components/DetailsForm/Ditailsform';
// import AddNewWarehouseForm from "./components/AddNewWarehouseForm/AddNewWarehouseForm";
// // import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
// import InventoryList from "./components/InventoryList/InventoryList";
// App Components
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<WarehouseList />} />
          <Route path="/inventory" element={<InventoryPage />} />
          {/* Display all inventories for a given warehouse */}
          <Route path="/warehouse/:id" element={<WarehouseWithInventories />} />
          <Route path="/inventory/:id" element={<InventoryDetail />} />
          <Route path="/addWarehouse" element={<AddWarehousePage />} />
          <Route path="/addInventory" element={<AddInventoryPage />} />
          {/*<Route path="/Ditailsform" element={<Ditailsform/>}/>
          <Route path="/AddNewWarehouseForm" element={<AddNewWarehouseForm/>}/>
          <Route
            path="warehouses/:warehouseId"
            element={<WarehouseDetails />}
          /> */}
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
