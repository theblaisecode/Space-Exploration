import { useState } from "react";
import { crew } from "../data";
import CrewContentWrapper from "../styles/CrewContentWrapper";

/* id: number;
  jobTitle: string;
  crewName: string;
  crewInfo: string;
  crewImg: string;
  crewImgAlt: string; */

function CrewContent() {
  const [crewData, setCrewData] = useState<number>(1);

  const toggleCrew = (index:number) => {
    setCrewData(index);
  };

  return (
    <CrewContentWrapper>
      <div className="allCrew">
        <div className="contentTop">
          {crew.map((crewDetails) => {
            const { id, jobTitle, crewName, crewInfo } = crewDetails;

            return (
              <div key={id}>
                <span>{jobTitle} </span>
                <h2>{crewName}</h2>
                <p>{crewInfo}</p>
              </div>
            );
          })}

          <div className="crewNav">
            <div className="allCrewNav">
              {crew.map((crewNav) => {
                const { id } = crewNav;
                return (
                  <span
                    key={id}
                    className="cccccc"
                    style={{
                      width: "30px",
                      height: "30px",
                      background: "red",
                      display: "block",
                      marginBottom: ".3rem",
                    }}></span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contentBottom">
          {crew.map((crewImage) => {
            const { id, crewImg, crewImgAlt } = crewImage;

            return <img key={id} src={crewImg} alt={crewImgAlt} />;
          })}
        </div>
      </div>
    </CrewContentWrapper>
  );
}
export default CrewContent;
