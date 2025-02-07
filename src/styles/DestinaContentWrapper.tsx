import styled from "styled-components";

const DestinaContentWrapper = styled.div`
  font-weight: 100;

  .allTabs,
  .allTabName {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .allTabs {
    gap: 3.2rem;
  }

  .contentTop {
    flex: 1;
  }

  .contentBottom {
    flex: 1;
    padding: 13.3rem 4.7rem;
  }

  .contentBottom,
  .tabContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }

  .img {
    padding: 12.7rem 2.9rem;
    display: none;
  }

  .activeImg {
    display: inline-block;
  }

  .allTabName {
    text-transform: uppercase;
    font-family: "Barlow Condensed", serif;
    gap: 3.2rem;
  }

  .tabs {
    font-size: 1.6rem;
    padding: 1.2rem 0;
    letter-spacing: 0.2rem;
    color: var(--textPrimary);
    border-bottom: 0.4rem solid transparent;
    cursor: pointer;
    transition: 0.4s;
  }

  .tabs:hover,
  .activetab {
    color: var(--textLight);
    border-bottom: 0.4rem solid var(--textLight);
    transition: all 0.4s;
  }

  .tabContent {
    gap: 1.8rem;
    display: none;
  }

  .activeContent {
    display: block;
  }

  .tabContent .title {
    font-family: "Bellefair", serif;
    text-transform: uppercase;
    font-size: 10rem;
    font-weight:100;
  }

  .tabContent .description {
    font-family: "Barlow", serif;
    font-size: 1.8rem;
    line-height: 180%;
    color: var(--textPrimary);
  }

  .tabLine {
    width: 100%;
    height: 0.1rem;
    background: rgba(255, 255, 255, 0.2);
    margin: 3rem 0;
  }

  .extraInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .distance,
  .travelTime {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  .distance span,
  .travelTime span {
    color: var(--textPrimary);
    text-transform: uppercase;
    font-size: 1.4rem;
    font-family: "Barlow Condensed", serif;
    letter-spacing: 0.2rem;
  }

  .distance p,
  .travelTime p {
    font-family: "Bellefair", serif;
    font-size: 2.8rem;
    text-transform: uppercase;
  }
`;

export default DestinaContentWrapper;
