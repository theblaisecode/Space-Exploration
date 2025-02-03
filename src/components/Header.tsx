import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

function Header() {
  return (
    <header>
      <Link to="/" className="logo" aria-label="Link to Home page">
        <img src={logo} alt="space exploration logo" />
      </Link>
    </header>
  );
}
export default Header;
