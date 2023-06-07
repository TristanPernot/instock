import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Import Pages
import Homepage from "./pages/Homepage/Homepage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import SingleWarehousePage from "./pages/SingleWarehousePage/SingleWarehousePage";
import SingleInventoryPage from "./pages/SingleInventoryPage/SingleInventoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
// import Ditailsform from './components/DetailsForm/Ditailsform';
import AddNewWarehouseForm from "./components/AddNewWarehouseForm/AddNewWarehouseForm";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import InventoryList from "./components/InventoryList/InventoryList";
import EditInventory from "./components/EditInventory/EditInventory";
// App Components
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/warehouse/:id" element={<SingleWarehousePage />} />
          <Route path="/inventory/:id" element={<SingleInventoryPage />} />
          <Route path="/addWarehouse" element={<AddWarehousePage />} />
          <Route path="/addInventory" element={<AddInventoryPage />} />
          {/* <Route path="/Ditailsform" element={<Ditailsform/>}/> */}
          <Route
            path="/AddNewWarehouseForm"
            element={<AddNewWarehouseForm />}
          />
          <Route path="/editWarehouse" element={<EditWarehousePage />} />
          <Route
            path="warehouses/:warehouseId"
            element={<WarehouseDetails />}
          />
          <Route path="/InventoryList"element={<InventoryList/>}/>
          <Route path="/EditInventory"element={<EditInventory/>}/>
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
