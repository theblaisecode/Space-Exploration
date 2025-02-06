import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function HomeLayout() {
  const location = useLocation(); // Detects route changes
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const timeout = setTimeout(() => setFade(false), 900); // Match animation duration
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Header />
      <div className={fade ? "fadeIn" : ""}>
        <Outlet />
      </div>
    </>
  );
}

export default HomeLayout;
