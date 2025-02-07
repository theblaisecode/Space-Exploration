import { destination } from "../data";
import DestinaContentWrapper from "../styles/DestinaContentWrapper";

function DestinaContent() {
  return (
    <DestinaContentWrapper className="tabInfo">
      {destination.map((item) => {
        const { id, img, imgAlt, heading, tabContent, distance, travelTime } =
          item;

        return (
          <div key={id}>
            <div className="contentTop">
              <img src={img} alt={imgAlt} />
            </div>

            <div className="contentBottom">
              <div className="allTabName">
                {destination.map((tabNames, index) => {
                  return (
                    <span key={index} className="tabs activetab">
                      {tabNames.tabName}
                    </span>
                  );
                })}
              </div>

              <div className="tabContent">
                <h2 className="title">{heading}</h2>
                <p className="decription">{tabContent}</p>
                <div className="tabLine"></div>

                <div className="extraInfo">
                  <div className="distance">
                    <span>avg. distance</span>
                    <p>{distance}</p>
                  </div>

                  <div className="travelTime">
                    <span>est. travel time</span>
                    <p>{travelTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </DestinaContentWrapper>
  );
}
export default DestinaContent;
