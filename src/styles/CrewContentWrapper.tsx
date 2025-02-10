import styled from "styled-components";

const CrewContentWrapper = styled.section`
  .allCrew {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
  }

  .contentTop {
    position: relative;
    padding: 1.5rem 0;
  }

  .contentTop,
  .contentBottom {
    flex: 1;
  }

  .crewDeets {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.6rem;
    font-family: "Bellefair", serif;
    text-transform: uppercase;
  }

  .crewDeets span {
    font-weight: 100;
    font-size: 3.2rem;
    color: var(--textAccent);
  }

  .crewDeets h2 {
    font-weight: 100;
    font-size: 5.6rem;
    color: var(--textLight);
  }

  .crewDeets p {
    font-family: "Barlow", serif;
    font-weight: 100;
    text-transform: none;
    font-size: 1.8rem;
    line-height: 180%;
    color: var(--textPrimary);
  }

  .contentBottom {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .contentBottom img {
    width: 90%;
    padding: 3rem 0;
    margin-left: 5rem;
  }

  .allCrewNav {
    position: absolute;
    bottom: -60%;
    left: 0;
    display: flex;
    gap: 1rem;
  }

  .allCrewNav span {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--textAccent);
    display: block;
  }
`;

export default CrewContentWrapper;
