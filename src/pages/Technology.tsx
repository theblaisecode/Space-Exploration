import PageTitle from "../components/PageTitle";
import TechnContent from "../components/TechnContent.tsx";
import TechnologyWrapper from "../styles/TechnologyWrapper";

function Technology() {
  const highlight = "03";
  const text = "space launch 101";

  return (
    <TechnologyWrapper>
      <div className="container2">
        <div className="technologyContent">
          <PageTitle highlight={highlight} text={text} />

          <TechnContent/>
        </div>
      </div>
    </TechnologyWrapper>
  );
}

export default Technology;
