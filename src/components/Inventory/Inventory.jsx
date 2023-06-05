import "../Inventory/Inventory.scss";

function Inventory() {
  return (
    <>
      <div className="inventory">
        <div className="inventory__searchContainer">
          <h1 className="inventory__header">Inventory</h1>
          <input
            className="inventory__searchbar"
            type="search"
            placeholder="Search..."
          />
          <button className="inventory__button">+Add New Item</button>
        </div>
        <div className="inventory__itemContainer">
          <div className="inventory__mobileContainer1"></div>
          <div className="inventory__tableHeader">INVENTORY ITEM</div>
          <div className="inventory__item">{}</div>
          <div className="inventory__tableHeader">CATEGORY</div>
          <div className="inventory__body">{}</div>

          <div className="inventory__mobileContainer2">
            <div className="inventory__tableHeader">STATUS</div>
            <div className="inventory__body">{}</div>
            <div className="inventory__tableHeader">QTY</div>
            <div className="inventory__body">{}</div>
            <div className="inventory__tableHeader">WAREHOUSE</div>
            <div className="inventory__body">{}</div>
          </div>

          <div className="inventory__iconContainer">
            <div>
              <button>
                <img
                  src="../../assets/Icons/delete_outline-24px.svg"
                  alt="delete"
                />
              </button>
            </div>
            <div>
              <button>
                <img src="../../assets/Icons/edit-24px.svg" alt="edit" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inventory;
