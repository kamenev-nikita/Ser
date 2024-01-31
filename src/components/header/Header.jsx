import "./header.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <NavLink to="/home">
        <img src={logo} className="logo" alt="logo"></img>
      </NavLink>

      <NavLink to="/home" className="btn btn-outline-warning">
        главная
      </NavLink>

      <NavLink to="/calc" className="btn btn-outline-warning">
        калькулятор
      </NavLink>

      <NavLink to="/about" className="btn btn-outline-warning">
        о нас
      </NavLink>

      <NavLink to="/contacts" className="btn btn-outline-warning">
        контакты
      </NavLink>

      <hr></hr>
    </header>
  );
};

export default Header;
