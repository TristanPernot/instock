import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import arrowright from "../../assets/Icons/chevron_right-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import "./WarehouseList.scss";
import deleteimg from "../../assets/Icons/delete_outline-24px.svg";
import editing from "../../assets/Icons/edit-24px.svg";
import DeleteModal from "../DeleteModal/DeleteModal";

function WarehouseList() {
  const api = process.env.REACT_APP_API_URL;
  const [warehouse, setWarehouse] = useState([]);
  const [deleteModalInfo, setDeleteModalInfo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/warehouse`)
      .then((response) => {
        setWarehouse(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function getWarehouseList() {
    axios
      .get(`http://localhost:8080/warehouse`)
      .then((response) => {
        setWarehouse(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  function deleteWarehouse(id) {
    axios
      .delete(`http://localhost:8080/warehouse/${id}`)
      .then((response) => {
        getWarehouseList(id);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteButtonClick(warehouse) {
    const info = {
      id: warehouse.id,
      title: `Delete ${warehouse.warehouse_name} warehouse?`,
      text: `Please confirm that you’d like to delete ${warehouse.warehouse_name} from the list of warehouses. You won’t be able to undo this action.`,
    };

    setDeleteModalInfo(info);
  }

  function onDeleteModalCancel() {
    setDeleteModalInfo({});
  }

  function onDeleteModalConfirm() {
    deleteWarehouse(deleteModalInfo.id);
    setDeleteModalInfo({});
  }
  return (
    <div className="container">
      <DeleteModal
        deleteModalInfo={deleteModalInfo}
        onCancel={onDeleteModalCancel}
        onConfirm={onDeleteModalConfirm}
      />
      <h1>Warehouses</h1>
      <form className="container__form">
        <input
          id="search"
          type="text"
          className="container__searchbox"
          placeholder="Search..."
          name="searchBar"
        />
        <Link className="container__btn" to={"/addWarehouse"}>
          + Add New Warehouse
        </Link>
      </form>
      <ul className="container__headerlist">
        <li className="container__li--header">
          <div className="container__li--format">
            <span className="container__li--item">
              <h4>WAREHOUSE</h4>
              <img src={`${sort}`} alt="sort" />
            </span>
            <span className="container__li--item ">
              <h4>ADDRESS</h4>
              <img src={`${sort}`} alt="sort" />
            </span>
          </div>
          <div className="container__li--format">
            <span className="container__li--item ">
              <h4>CONTACT NAME</h4>
              <img src={`${sort}`} alt="sort" />
            </span>
            <span className="container__li--item container__li--item-large">
              <h4>CONTACT INFO</h4>
              <img src={`${sort}`} alt="sort" />
            </span>
          </div>
          <span className="container__li--item container__li--item-small action">
            <h4>ACTIONS</h4>
          </span>
        </li>
      </ul>
      <ul className="container__list">
        {warehouse.map((warehouse) => {
          return (
            <li key={warehouse.id} className="container__li hoverdiv">
              <div className="container__li--format">
                <h4 className="container__li--mobile">WAREHOUSE</h4>

                <span className="container__li--item">
                  <Link to={`/warehouse/${warehouse.id}`}>
                    <div className="container__li--titlewrapper">
                      <p className="container__li--special">
                        {warehouse.warehouse_name}
                      </p>
                      <img
                        className="container__arrow"
                        src={`${arrowright}`}
                        alt="arrow"
                      />
                    </div>
                  </Link>
                </span>
                <h4 className="container__li--mobile address">ADDRESS</h4>
                <div className="container__li--item container__li--format">
                  {warehouse.address}
                  <br />
                  {warehouse.city} {warehouse.country}
                </div>
              </div>
              <div className="container__li--format">
                <h4 className="container__li--mobile">CONTACT NAME</h4>
                <p className="container__li--item">{warehouse.contact_name}</p>
                <h4 className="container__li--mobile contact-information">
                  CONTACT INFORMATION
                </h4>
                <div className="container__li--item container__li--item-large container__li--format">
                  {warehouse.contact_phone}
                  <br />
                  {warehouse.contact_email}
                </div>
              </div>
              <span className="container__li--img delete">
                <img
                  className="container__icon"
                  src={`${deleteimg}`}
                  alt="delete"
                  onClick={() => deleteButtonClick(warehouse)}
                />
                <Link to={`/editWarehouse/${warehouse.id}`}>
                  <img
                    className="container__icon"
                    src={`${editing}`}
                    alt="edit"
                  />
                </Link>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default WarehouseList;
