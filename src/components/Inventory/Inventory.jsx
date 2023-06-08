import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../Inventory/Inventory.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import goToIcon from "../../assets/Icons/chevron_right-24px.svg";

function Inventory() {
  const [inventoryData, setInventoryData] = useState([]);
  const [filterInventoryData, setFilterInventoryData] = useState([]);

  //~~get inventory data~~
  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventory`)
      .then((response) => {
        setInventoryData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //~~get single inventory description~~
  useEffect(() => {
    axios
      .get(`http://localhost:8080/inventory/:id`)
      .then((response) => {
        setInventoryData(response.data);
        console.log(inventoryData);
      })
      .catch((err) => console.log(err));
  }, []);
  const headers = [
    "INVENTORY ITEM",
    "CATEGORY",
    "STATUS",
    "QTY",
    "WAREHOUSE",
    "ACTIONS",
  ];

  const headerElements = headers.map((header) => (
    <ul key={header} className="inventory__tabletFirstHeader">
      {header}
      <img src={sortIcon} alt="sort" className="inventory__sort" />
    </ul>
  ));

  return (
    <div className="inventory">
      <div className="inventory__container">
        <div className="inventory__searchContainer">
          <h1 className="inventory__header">Inventory</h1>
          <div className="inventory__tabletSearchContainer">
            <input
              className="inventory__searchbar"
              type="search"
              placeholder="Search..."
            />
            <Link to="/inventory/add">
              <button className="inventory__button">+Add New Item</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="inventory__tabletContainer1">{headerElements}</div>
      {inventoryData?.map((inventory) => (
        <div className="inventory__listContainer">
          <div className="inventory__mobileContainer1">
            <div className="inventory__test">
              <div className="inventory__mobileContainer2">
                <div className="inventory__table">
                  <ul className="inventory__tableHeader">
                    INVENTORY ITEM
                    <img
                      src={sortIcon}
                      alt="sort"
                      className="inventory__sort"
                    />
                  </ul>
                  <li className="inventory__tableItems" id="itemName">
                    <Link
                      to={`/inventory/${inventory.id}`}
                      className="inventory__itemDetails"
                    >
                      {inventory.item_name} <img src={goToIcon} alt="goTo" />
                    </Link>
                  </li>
                </div>
                <div className="inventory__table">
                  <ul className="inventory__tableHeader">
                    CATEGORY
                    <img
                      src={sortIcon}
                      alt="sort"
                      className="inventory__sort"
                    />
                  </ul>
                  <li className="inventory__tableItems">
                    {inventory.category}
                  </li>
                </div>
              </div>
              <div className="inventory__mobileContainer3">
                <div className="inventory__table">
                  <ul className="inventory__tableHeader">
                    STATUS
                    <img
                      src={sortIcon}
                      alt="sort"
                      className="inventory__sort"
                    />
                  </ul>
                  <li
                    className={
                      inventory.quantity > 0
                        ? "inventory__stock"
                        : "inventory__stock--red"
                    }
                  >
                    {inventory.status.toUpperCase()}
                  </li>
                </div>
                <div className="inventory__table">
                  <ul className="inventory__tableHeader">
                    QTY
                    <img
                      src={sortIcon}
                      alt="sort"
                      className="inventory__sort"
                    />
                  </ul>
                  <li className="inventory__tableItems">
                    {inventory.quantity}
                  </li>
                </div>
                <div className="inventory__table">
                  <ul className="inventory__tableHeader">
                    WAREHOUSE
                    <img
                      src={sortIcon}
                      alt="sort"
                      className="inventory__sort"
                    />
                  </ul>
                  <li className="inventory__tableItems">
                    {inventory.warehouse_name}
                  </li>
                </div>
              </div>
            </div>
            <div className="inventory__mobileContainer4">
              <div className="inventory__table">
                <ul className="inventory__tableHeader" id="actions">
                  ACTIONS
                </ul>
                <li className="inventory__tableItems">
                  <div className="inventory__iconTablet">
                    <div className="inventory__icons">
                      <Link to="/" className="inventory__delete">
                        <img
                          src={deleteIcon}
                          alt="delete"
                          className="inventory_iconImage"
                        />
                      </Link>
                    </div>
                    <div className="inventory__icons">
                      <Link to="/EditInventory" className="inventory__edit">
                        <img
                          src={editIcon}
                          alt="edit"
                          className="inventory_iconImage"
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default Inventory;
