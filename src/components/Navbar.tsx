import { NavLink } from "react-router-dom";
import { webNav } from "../data";

type navInfo = {
  id: number;
  info: string;
  url: string;
  ariaLabel: string;
};

function Navbar() {
  return (
    <nav>
      {webNav.map((navItem: navInfo) => {
        const { id, info, url, ariaLabel } = navItem;
        return (
          <NavLink
            key={id}
            to={url}
            aria-label={ariaLabel}
            className={({ isActive }) => (isActive ? "activeNav" : "")}>
            {info}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navbar;
