import { NavLink } from "react-router-dom";
import { webNav } from "../data";

type navInfo = {
  id: number;
  number: string;
  info: string;
  url: string;
  ariaLabel: string;
};

function Navbar() {
  return (
    <nav className="nav">
      {webNav.map((navItem: navInfo) => {
        const { id, number, info, url, ariaLabel } = navItem;
        return (
          <NavLink
            key={id}
            to={url}
            aria-label={ariaLabel}
            className={({ isActive }) => (isActive ? "activeNav" : "")}>
            <span>{number}</span>
            {info}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navbar;
