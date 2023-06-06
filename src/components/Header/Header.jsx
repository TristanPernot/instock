import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import headerImg from "../../assets/Logo/InStock-Logo.svg";
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

  // edit Header
  //   <header className="header">
  //   <Link to="/"><img className="header__img" src={headerImg} alt="instock arrow logo" /></Link>
  //   <div className="header__buttons">
  //       <NavLink to="/warehouses" className={({ isActive }) =>
  //           isActive ? "header__warehouse-button--active" : "header__warehouse-button"
  //           }><h3 className="header__button">Warehouses</h3></NavLink>
  //       <NavLink to="/inventory" className={({ isActive }) =>
  //           isActive ? "header__inventory-button--active" : "header__inventory-button"
  //           }><h3 className="header__button">Inventory</h3></NavLink>
  //   </div>
  // </header>
}

export default Header;
