import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import Navbar from "./Navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import HeaderWrapper from "../styles/HeaderWrapper";

function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function toggleMobileMenu() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }

  return (
    <HeaderWrapper>
      <Link to="/" className="logo" aria-label="Link to Home page">
        <img src={logo} alt="space exploration logo" />
      </Link>

      <div className="navLine"></div>

      <div className="navigation">
        <Navbar />

        {/* Mobile Nav */}
        <button className="btn mobileNav" onClick={toggleMobileMenu}>
          {isMobile ? <FaXmark /> : <FaBarsStaggered />}
        </button>
      </div>
    </HeaderWrapper>
  );
}
export default Header;
