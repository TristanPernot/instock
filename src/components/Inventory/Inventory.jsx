import "../Inventory/Inventory.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";

function Inventory() {
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

        <div className="inventory__listContainer">
          <div className="inventory__items">
            <ul>
              INVENTORY ITEM
              <img src={sortIcon} alt="sort" className="inventory__sort" />
            </ul>
            <li>
              ITEM PLACEHOLDER
              <img src={sortIcon} alt="sort" className="inventory__sort" />
            </li>
          </div>
          <div>
            <ul>
              CATEGORY
              <img src={sortIcon} alt="sort" className="inventory__sort" />
            </ul>
            <li>ITEM PLACEHOLDER</li>
          </div>
          <div>
            <ul>
              STATUS
              <img src={sortIcon} alt="sort" className="inventory__sort" />
            </ul>
            <li>ITEM PLACEHOLDER</li>
          </div>
          <div>
            <ul>
              QTY
              <img src={sortIcon} alt="sort" className="inventory__sort" />
            </ul>
            <li>ITEM PLACEHOLDER</li>
          </div>
          <div>
            <ul>
              WAREHOUSE
              <img src={sortIcon} alt="sort" className="inventory__sort" />
            </ul>
            <li>
              ITEM PLACEHOLDER
              <img src={sortIcon} alt="sort" className="inventory__sort" />
            </li>
          </div>
          <div>
            <ul>ACTIONS</ul>
            <li>ITEM PLACEHOLDER</li>
          </div>
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
            <div className="inventory__iconTablet">
              <div className="inventory__icons">
                <img src={deleteIcon} alt="delete" />
              </div>
              <div className="inventory__icons">
                <img src={editIcon} alt="edit" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Inventory;
