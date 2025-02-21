import { useState } from "react";
import { technology } from "../data.ts";
import TechnContentWrapper from "../styles/TechnContentWrapper.tsx";

function TechnContent() {
  const [techData, setTechData] = useState<number>(1);

  const toggleTech = (index: number) => {
    setTechData(index);
  };

  return (
    <TechnContentWrapper>
      <div className="allTech">
        <div className="contentTop">
          <div className="techNav">
            <div className="allTechNav">
              {technology.map((techNav) => {
                const { id } = techNav;

                return (
                  <span
                    key={id}
                    className={techData === id ? "active" : ""}
                    onClick={() => toggleTech(id)}>
                    {id}
                  </span>
                );
              })}
            </div>
          </div>

          {technology.map((techDetails) => {
            const { id, stage, info } = techDetails;

            return (
              <div
                key={id}
                className={
                  techData === id
                    ? "fadeIn techDeets active"
                    : "fadeIn techDeets"
                }>
                <span>The terminology... </span>
                <h2>{stage}</h2>
                <p>{info}</p>
              </div>
            );
          })}
        </div>

        <div className="contentBottom">
          {technology.map((techImage) => {
            const { id, techImg, techImgAlt } = techImage;

            return (
              <img
                key={id}
                src={techImg}
                alt={techImgAlt}
                className={techData === id ? "fadeIn active" : "fadeIn"}
              />
            );
          })}
        </div>
      </div>
    </TechnContentWrapper>
  );
}
export default TechnContent;
