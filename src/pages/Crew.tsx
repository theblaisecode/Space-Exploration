import CrewContent from "../components/CrewContent";
import PageTitle from "../components/PageTitle";
import CrewWrapper from "../styles/CrewWrapper";

function Crew() {
  const highlight = "02";
  const text = "meet your crew";

  return (
    <CrewWrapper>
      <div className="container2">
        <div className="crewContent">
          <PageTitle highlight={highlight} text={text} />

          <CrewContent/>
        </div>
      </div>
    </CrewWrapper>
  );
}

export default Crew;
