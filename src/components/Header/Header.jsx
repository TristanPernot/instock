import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__nav">
        <div className="header__nav--item">Warehouses</div>
        <div className="header__nav--item">Inventory</div>
      </div>
    </header>
  );
}

export default Header;
