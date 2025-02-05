import styled from "styled-components";
import homeBg from "../assets/home/background-home-desktop.jpg";

const HomeWrapper = styled.section`
  background: url(${homeBg}) no-repeat bottom center/cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--textLight);
  position: relative;

  .homeContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25rem;
    /* gap: 3rem; */
  }

  .contentTop {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .contentTop h1,
  .contentBottom .homeBtn,
  .contentTop span {
    text-transform: uppercase;
    font-family: "Bellefair", serif;
    font-size: 14.4rem;
  }

  .contentTop h1 {
    font-weight: 500;
  }

  .contentTop span {
    font-family: "Barlow Condensed", serif;
    font-size: 2.8rem;
    line-height: auto;
    font-weight: 400;
    letter-spacing: 0.4rem;
    color: var(--textPrimary);
  }

  .contentTop p {
    font-family: "Barlow", serif;
    font-size: 1.8rem;
    font-weight: 200;
    line-height: 180%;
    width: 80%;
    color: var(--textPrimary);
  }

  .contentBottom {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  .btnBg {
    background: transparent;
    padding: 8rem;
    border-radius: 50%;
    transition: 0.9s;
  }

  .btnBg:hover {
    background: rgba(225, 225, 225, 0.15);
    transition: all 0.9s;
  }

  .contentBottom .homeBtn {
    display: block;
    font-size: 3.2rem;
    color: var(--textDark);
    background: var(--textLight);
    border: none;
    outline: none;
    padding: 11.75rem 6.8rem;
    border-radius: 50%;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    .homeContent {
      flex-direction: column;
      margin-top: 12rem;
      gap: 3rem;
    }

    .contentTop {
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .contentTop h1 {
      font-size: 8rem;
    }

    .contentTop span {
      font-size: 2rem;
    }

    .contentTop p {
      font-size: 1.5rem;
      width: 100%;
    }

    .contentBottom {
      margin-top: 3rem;
      justify-content: center;
    }

    .btnBg {
      padding: 5rem;
    }

    .contentBottom .homeBtn {
      font-size: 1.8rem;
      padding: 7rem 4rem;
    }
  }

  @media (min-width: 550px) and (max-width: 950px) {
    .homeContent {
      flex-direction: column;
      margin-top: 12rem;
      gap: 2rem;
    }

    .contentTop h1 {
      font-size: 12.4rem;
    }

    .contentTop span {
      font-size: 2.3rem;
      letter-spacing: 0.4rem;
    }

    .contentTop p {
      font-size: 1.6rem;
      width: 90%;
      text-align: center;
    }

    .btnBg {
      padding: 5rem;
      margin-bottom:3rem;
    }

    .contentBottom .homeBtn {
      font-size: 3rem;
      padding: 7.5rem 3rem;
    }
  }
`;

export default HomeWrapper;
