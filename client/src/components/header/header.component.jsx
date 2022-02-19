import "./header.styles.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/duckstats_logo_1000x1000.png";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={logo} alt="Logo" className="logo"></img>
    </Link>
    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>
    </div>
  </div>
);

export default Header;
