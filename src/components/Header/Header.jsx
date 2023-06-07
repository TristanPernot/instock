import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import headerImg from "../../assets/Logo/InStock-Logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <div className="header__logo"></div>
        </Link>

        <div className="header__nav">
          <NavLink to="./warehouses" className="header__nav--item">
            <div>Warehouses</div>
          </NavLink>

          <NavLink to="/inventory" className="header__nav--item">
            <div>Inventory</div>
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
