import { destination } from "../data";
import DestinationWrapper from "../styles/DestinationWrapper";

function Destination() {
  return (
    <DestinationWrapper>
      <div className="container">
        <div className="destinationContent">
          {destination.map((item) => {
            const {
              id,
              tabName,
              img,
              imgAlt,
              heading,
              tabContent,
              distance,
              travelTime,
            } = item;

            return (
              <>
                <div key={id} className="contentTop">
                  <img src={img} alt={imgAlt} />
                </div>

                <div className="contentBottom">
                  <div className="destinationTab">
                    {destination.map((tabNames, index) => {
                      return (
                        <span key={index} className="tabs activetab">
                          {tabNames.tabName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </DestinationWrapper>
  );
}
export default Destination;
