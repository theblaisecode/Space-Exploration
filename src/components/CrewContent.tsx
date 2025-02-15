import { useState } from "react";
import { crew } from "../data";
import CrewContentWrapper from "../styles/CrewContentWrapper";

function CrewContent() {
  const [crewData, setCrewData] = useState<number>(1);

  const toggleCrew = (index: number) => {
    setCrewData(index);
  };

  return (
    <CrewContentWrapper>
      <div className="allCrew">
        <div className="contentTop">
          {crew.map((crewDetails) => {
            const { id, jobTitle, crewName, crewInfo } = crewDetails;

            return (
              <div
                key={id}
                className={
                  crewData === id
                    ? "fadeIn crewDeets active"
                    : "fadeIn crewDeets"
                }>
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
                    className={crewData === id ? "active" : ""}
                    onClick={() => toggleCrew(id)}>
                    {id}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="contentBottom">
          {crew.map((crewImage) => {
            const { id, crewImg, crewImgAlt } = crewImage;

            return (
              <img
                key={id}
                src={crewImg}
                alt={crewImgAlt}
                className={crewData === id ? "fadeIn active" : "fadeIn"}
              />
            );
          })}
        </div>
      </div>
    </CrewContentWrapper>
  );
}
export default CrewContent;
