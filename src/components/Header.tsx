import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import Navbar from "./Navbar";
import HeaderWrapper from "../styles/HeaderWrapper";

function Header() {
  return (
    <HeaderWrapper>
      <Link to="/" className="logo" aria-label="Link to Home page">
        <img src={logo} alt="space exploration logo" />
      </Link>

      <div className="navLine"></div>

      <>
        <Navbar />
      </>
    </HeaderWrapper>
  );
}
export default Header;
