import "./WarehouseDetails.scss";
import editIconWhite from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Wherehouse Inventory

function WarehouseDetails() {
  const api = process.env.REACT_APP_API_URL;
  const { warehouseId } = useParams();
  const [warehouse, setWarehouse] = useState({});

  useEffect(() => {
    getSingleWarehouse(warehouseId);
  }, []);

  function getSingleWarehouse(warehouseId) {
    axios
      .get(`${api}/warehouses/${warehouseId}`)
      .then((response) => {
        setWarehouse(response.data);
        console.log("response data: ", response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  if (!Object.keys(warehouse).length) return;

  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <div className="warehouse__header-wrapper">
          <Link to="/warehouses">
            <img src={arrowBackIcon} alt="arrow back" />
          </Link>
          <h1>{warehouse.warehouse_name}</h1>
        </div>

        <Link
          className="warehouse__edit-button"
          to={`/warehouses/edit/${warehouseId}`}
        >
          <img src={editIconWhite} alt="edit icon" />
          <h3 className="warehouse__edit-button-caption">Edit</h3>
        </Link>
      </div>

      <div className="warehouse-info">
        <div className="warehouse-info__address-wrapper">
          <h4 className="warehouse__sub-heading">Warehouse Address:</h4>
          <div>
            <p className="warehouse-info__address">
              {warehouse.address}
              {", "}
            </p>
            <p className="warehouse-info__address">{warehouse.city}</p>
          </div>
        </div>
        <div className="warehouse-info__contact">
          <div className="warehouse-info__contact-wrapper">
            <h4 className="warehouse__sub-heading">Contact Name:</h4>
            <p>{warehouse.contact_name}</p>
            <p>{warehouse.contact_position}</p>
          </div>
          <div className="warehouse-info__contact warehouse-info__contact--right">
            <div>
              <h4 className="warehouse__sub-heading">Contact Information:</h4>
              <p>{warehouse.contact_phone}</p>
              <p>{warehouse.contact_email}</p>
            </div>
          </div>
        </div>
      </div>
        /*add Warehouse Inventory List */      
    </section>
  );
}

export default WarehouseDetails;
