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
`;

export default HeaderWrapper;
