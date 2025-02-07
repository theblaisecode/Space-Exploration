import DestinaContent from "../components/DestinaContent";
import DestinationWrapper from "../styles/DestinationWrapper";

function Destination() {
  return (
    <DestinationWrapper>
      <div className="container2">
        <div className="destinationContent">
          <h3 className="pageTitle">
            <span>01</span> pick your destination
          </h3>

          <DestinaContent />
        </div>
      </div>
    </DestinationWrapper>
  );
}
export default Destination;
