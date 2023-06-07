import { useState, useEffect } from "react";
import axios from "axios";

import "../Inventory/Inventory.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
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

  //~~ get warehouse name with ID~~
  useEffect(() => {
    if (inventoryData) {
      inventoryData.forEach((item) => {
        axios
          .get(`http://localhost:8080/warehouse/${item.warehouse_id}`)
          .then((response) => {
            item.warehouse_name = response.data.warehouse_name;

            setFilterInventoryData({ ...filterInventoryData, item });
          })
          .catch((error) => console.log(error));
      });
    }
    console.log(inventoryData);
  }, [inventoryData]);

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
            <button className="inventory__button">+Add New Item</button>
          </div>
        </div>
      </div>
      {inventoryData?.map((inventory) => (
        <div className="inventory__listContainer">
          <div className="inventory__mobileContainer1">
            <div className="inventory__mobileContainer2">
              <div className="inventory__table">
                <ul className="inventory__tableHeader">
                  INVENTORY ITEM
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </ul>
                <li className="inventory__tableItems" id="itemName">
                  {inventory.item_name} <img src={goToIcon} alt="goTo" />
                </li>
              </div>
              <div className="inventory__table">
                <ul className="inventory__tableHeader">
                  CATEGORY
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </ul>
                <li className="inventory__tableItems">{inventory.category}</li>
              </div>
            </div>
            <div className="inventory__mobileContainer3">
              <div className="inventory__table">
                <ul className="inventory__tableHeader">
                  STATUS
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </ul>
                <li
                  className={
                    inventory.quantity > 0
                      ? "inventory__tableHeader inventory__stock"
                      : "inventory__tableHeader inventory__stock--red"
                  }
                >
                  {inventory.status.toUpperCase()}
                </li>
              </div>
              <div className="inventory__table">
                <ul className="inventory__tableHeader">
                  QTY
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </ul>
                <li className="inventory__tableItems">{inventory.quantity}</li>
              </div>
              <div className="inventory__table">
                <ul className="inventory__tableHeader">
                  WAREHOUSE
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </ul>
                <li className="inventory__tableItems">
                  {inventory.warehouse_name}
                </li>
              </div>
            </div>
          </div>

          <div className="inventory__table">
            <ul className="inventory__tableHeader" id="actions">
              ACTIONS
            </ul>
            <li className="inventory__tableItems">
              <div className="inventory__iconTablet">
                <div className="inventory__icons">
                  <img
                    src={deleteIcon}
                    alt="delete"
                    className="inventory_iconImage"
                  />
                </div>
                <div className="inventory__icons">
                  <img
                    src={editIcon}
                    alt="edit"
                    className="inventory_iconImage"
                  />
                </div>
              </div>
            </li>
          </div>
          {/* <div className="inventory__itemContainer">
          <div className="inventory__mobileContainer1">
            <div className="inventory__mobileContainer2">
              <div className="inventory__tabletContainer">
                <div className="inventory__tableHeader">
                  INVENTORY ITEM
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </div>
                <div className="inventory__body">placeholder</div>
              </div>
              <div className="inventory__tabletContainer">
                <div className="inventory__tableHeader">
                  CATEGORY
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </div>
                <div className="inventory__body">placeholder</div>
              </div>
            </div>
            <div className="inventory__mobileContainer3">
              <div className="inventory__tabletContainer">
                <div className="inventory__tableHeader">
                  STATUS
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </div>
                <div className="inventory__body">placeholder</div>
              </div>
              <div className="inventory__tabletContainer">
                <div className="inventory__tableHeader">
                  QTY
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </div>
                <div className="inventory__body">placeholder</div>
              </div>
              <div className="inventory__tabletContainer">
                <div className="inventory__tableHeader">
                  WAREHOUSE
                  <img src={sortIcon} alt="sort" className="inventory__sort" />
                </div>
                <div className="inventory__body">placeholder</div>
              </div>
            </div>
          </div>
          <div className="inventory__iconContainer">
            <div className="inventory__tableHeader" id="actions">
              ACTIONS
            </div>
       
          </div>
        </div> */}
        </div>
      ))}
      ;
    </div>
  );
}

export default Inventory;
