import styled from "styled-components";

const TechnContentWrapper = styled.section`
  .allTech {
    display: flex;
    gap: 5rem;
    padding-top: 10rem;
    justify-content: center;
    align-items: center;
  }

  .allTech .contentTop,
  .allTechNav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .allTech .contentTop {
    flex: 1;
    gap: 3.5rem;
  }

  .allTechNav {
    flex-direction: column;
    gap: 3rem;
  }

  .allTechNav span {
    width: 7rem;
    height: 7rem;
    display: inline-block;
    text-align: center;
    font-family: "Bellefair", serif;
    font-size: 2.5rem;
    padding: 2rem;
    border: 0.1rem solid var(--textAccent);
    border-radius: 50%;
    cursor: pointer;
    transition: 0.4s;
  }

  .allTechNav span:hover,
  .allTechNav span.active {
    background: var(--textLight);
    color: var(--textDark);
    transition: all 0.4s;
  }

  .techDeets {
    flex-direction: column;
    gap: 2rem;
    display: none;
  }

  .techDeets.active {
    display: flex;
  }

  .techDeets span {
    font-size: 2rem;
    font-weight: 100;
    font-family: "Bellefair", serif;
    color: var(--textAccent);
    text-transform: uppercase;
  }

  .techDeets h2 {
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 100;
    font-family: "Bellefair", serif;
  }

  .techDeets p {
    font-family: "Barlow", serif;
    font-weight: 100;
    text-transform: none;
    font-size: 1.8rem;
    line-height: 180%;
    color: var(--textPrimary);
  }

  .contentBottom {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
  }

  .contentBottom img {
    width: 100%;
    display: none;
  }

  .contentBottom img.active {
    display: inline-block;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    .allTech {
      flex-direction: column-reverse;
      padding-top: 3rem;
    }

    .allTech .contentTop {
      flex-direction: column;
      padding: 0 4rem;
    }

    .allTechNav {
      flex-direction: row;
      gap: 3rem;
    }

    .allTechNav span {
      width: 4rem;
      height: 4rem;
      font-size: 1.8rem;
      padding: 1rem;
    }

    .techDeets {
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 1.3rem;
    }

    .techDeets span {
      font-size: 1.8rem;
    }

    .techDeets h2 {
      font-size: 3.5rem;
    }

    .techDeets p {
      font-size: 1.5rem;
    }

    .contentBottom {
      flex: none;
      width: 100vw;
      height: 25vh;
      justify-content: center;
      overflow: hidden;
    }

    .contentBottom img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 550px) and (max-width: 950px) {
    .contentBottom {
      width: 100%;
      height: 33vh;
      flex: none;
    }

    .contentBottom img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    .allTech {
      gap: 3rem;
    }
    .allTech .contentTop {
      /* flex-direction: column; */
      /* padding: 0 4rem; */
      gap: 2rem;
    }

    .allTechNav {
      /* flex-direction: row; */
      gap: 3rem;
    }

    .allTechNav span {
      width: 4rem;
      height: 4rem;
      font-size: 1.8rem;
      padding: 1rem;
    }

    .techDeets span {
      font-size: 2rem;
    }

    .techDeets h2 {
      font-size: 4rem;
    }

    .techDeets p {
      font-size: 1.5rem;
    }

    .contentBottom img {
      margin-right: 0;
    }
  }
`;

export default TechnContentWrapper;
