import { useState } from "react";
import { destination } from "../data";
import DestinaContentWrapper from "../styles/DestinaContentWrapper";

function DestinaContent() {
  const [viewTab, setViewTab] = useState<number>(1);

  const toggleTab = (index: number) => {
    setViewTab(index);
  };

  return (
    <DestinaContentWrapper className="tabInfo">
      <div className="allTabs">
        <div className="contentTop">
          {destination.map((imgItem) => {
            const { id, img, imgAlt } = imgItem;
            return (
              <img
                src={img}
                alt={imgAlt}
                className={viewTab === id ? "img activeImg " : "img "}
              />
            );
          })}
        </div>

        <div className="contentBottom">
          <div className="allTabName">
            {destination.map((tabItem) => {
              const { id, tabName } = tabItem;
              return (
                <span
                  key={id}
                  className={viewTab === id ? "tabs activetab" : "tabs"}
                  onClick={() => toggleTab(id)}>
                  {tabName}
                </span>
              );
            })}
          </div>

          {destination.map((contentItem) => {
            const { id, heading, tabContent, distance, travelTime } =
              contentItem;

            return (
              <div
                key={id}
                className={
                  viewTab === id
                    ? "fadeIn tabContent activeContent"
                    : "fadeIn tabContent"
                }>
                <h2 className="title">{heading}</h2>
                <p className="description">{tabContent}</p>
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
            );
          })}
        </div>
      </div>
    </DestinaContentWrapper>
  );
}

export default DestinaContent;
