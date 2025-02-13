import styled from "styled-components";

const CrewContentWrapper = styled.section`
  .allCrew {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 5rem; */
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
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.6rem;
    font-family: "Bellefair", serif;
    text-transform: uppercase;
    display: none;
  }

  .crewDeets.active {
    display: flex;
  }

  .crewDeets span {
    font-weight: 100;
    font-size: 3.2rem;
    color: var(--textAccent);
  }

  .crewDeets h2 {
    font-weight: 100;
    font-size: 5rem;
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
    display: none;
  }

  .contentBottom img.active {
    display: inline-block;
  }

  .allCrewNav {
    position: absolute;
    bottom: -40%;
    left: 0%;
    /* transform: translateX(8%); */
    display: flex;
    gap: 3rem;
    width: 100%;
    max-width: 120rem;
    text-align: center;
  }

  .allCrewNav span {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: var(--textAccent);
    /* display: block; */
    transition: 0.4s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--textPrimary);
    padding: 1.5rem;
  }

  .allCrewNav span.active,
  .allCrewNav span:hover {
    color: var(--textDark);
    background: var(--textLight);
    transition: all 0.4s;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    .allCrew {
      flex-direction: column;
      justify-content: center;
    }

    .contentTop {
      margin-bottom: 4rem;
    }

    .crewDeets {
      align-items: center;
      gap: 1.6rem;
      text-align: center;
    }

    .crewDeets span {
      font-size: 1.8rem;
    }

    .crewDeets h2 {
      font-size: 2.4rem;
    }

    .crewDeets p {
      font-size: 1.5rem;
    }

    .contentBottom {
      justify-content: center;
      align-items: center;
    }

    .contentBottom img {
      width: 60%;
      margin-left: 0rem;
      margin-top: 5rem;
      padding: 0;
    }

    .allCrewNav {
      position: fixed;
      bottom: 48%;
      left: 50%;
      transform: translateX(-26%);
      width: 100%;
      max-width: 120rem;
      text-align: center;
    }

    .allCrewNav span {
      font-size: 1.3rem;
      gap: 2rem;
    }
  }

  @media (min-width: 550px) and (max-width: 950px) {
    .contentTop {
      width: 72%;
    }

    .crewDeets {
      padding-bottom: 5rem;
    }

    .allCrewNav {
      bottom: 52%;
      transform: translateX(-14%);
    }

    .contentBottom img {
      width: 53%;
      margin-left: 0rem;
      margin-top: 0rem;
      padding: 0;
    }
  }

  @media (min-width: 951px) and (max-width: 1200px) {
  }
`;

export default CrewContentWrapper;
