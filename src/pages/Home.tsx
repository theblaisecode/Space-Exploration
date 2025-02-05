import { Link } from "react-router-dom";
import HomeWrapper from "../styles/HomeWrapper";

function Home() {
  return (
    <HomeWrapper>
      <div className="container">
        <div className="homeContent">
          <div className="contentTop">
            <span>so, you want to travel to</span>
            <h1>space</h1>
            <p>
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we&apos;ll give you a truly
              out of this world experience!
            </p>
          </div>

          <div className="contentBottom">
            <div className="btnBg">
              <Link to="/destination" className="homeBtn">
                explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
