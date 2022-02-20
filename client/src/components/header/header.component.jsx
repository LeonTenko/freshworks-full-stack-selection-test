// Asset imports
import "./header.styles.scss";
import logo from "../../assets/duckstats_logo_1000x1000.png";

// Component imports
import { Link } from "react-router-dom";

// MaterialUI imports
import Divider from "@mui/material/Divider";

const Header = () => (
  <div>
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo"></img>
      </Link>
    </div>
    <Divider light sx={{ margin: "15px 0px" }}></Divider>
  </div>
);

export default Header;
