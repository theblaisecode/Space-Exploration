import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: absolute; /* ✅ Places header on top of the page */
  top: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0rem 1.6rem 6rem;
  z-index: 10; /* ✅ Ensures it stays above content */

  .navigation{
    display: flex;
    justify-content:flex-end;
    width: 45%;
  }

  @media screen and (max-width: 950px), screen and (max-height: 550px) {
    align-items: flex-start;
    padding: 1rem 0 0 6rem;

    .navigation {
      position: relative;
      width: 35%;
    }
  }

  @media screen and (max-width: 550px), screen and (max-height: 550px) {
    .navigation {
      position: relative;
      width: 50%;
    }
  }
`;

export default HeaderWrapper;
