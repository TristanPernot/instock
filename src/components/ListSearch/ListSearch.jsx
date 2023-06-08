import "../ListSearch/ListSearch.scss";

function ListSearch() {
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
  </div>;
}

export default ListSearch;
