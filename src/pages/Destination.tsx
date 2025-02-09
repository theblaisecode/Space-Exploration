import DestinaContent from "../components/DestinaContent";
import PageTitle from "../components/PageTitle";
import DestinationWrapper from "../styles/DestinationWrapper";

function Destination() {
  const highlight = "01";
  const text = "pick your destination";
  
  return (
    <DestinationWrapper>
      <div className="container2">
        <div className="destinationContent">
          <PageTitle highlight={highlight} text={text} />

          <DestinaContent />
        </div>
      </div>
    </DestinationWrapper>
  );
}

export default Destination;
