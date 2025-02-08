import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: absolute; /* ✅ Places header on top of the page */
  top: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0rem 1.6rem 9rem;
  z-index: 10; /* ✅ Ensures it stays above content */

  .navLine {
    position: absolute;
    top: 6.5rem;
    left: 22%;
    width: 60rem;
    height: 0.2rem;
    background: rgba(255, 255, 255, 0.2);
    z-index: 20;
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
    width: 45%;
  }

  .allLinks {
    /* width: 100%; */
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    align-items: flex-start;
    padding: 1rem 0 0 6rem;

    .logo img {
      width: 80%;
    }

    .navLine {
      display: none;
    }

    .navigation {
      position: relative;
      width: 35%;
    }
  }

  @media screen and (max-width: 550px), screen and (max-height: 550px) {
    padding: 1rem 0 0 2rem;

    .navigation {
      position: relative;
      width: 50%;
    }
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    .navLine {
      display: none;
    }
  }

  @media (min-width: 1441px) and (max-width: 1628px) {
    .navLine {
      display: none;
    }
  }
`;

export default HeaderWrapper;
