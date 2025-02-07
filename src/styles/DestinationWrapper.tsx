import styled from "styled-components";
import destinationBg from "../assets/destination/background-destination-desktop.jpg";

const DestinationWrapper = styled.section`
  background: url(${destinationBg}) no-repeat bottom center/cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--textLight);
  position: relative;

  .destinationContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .pageTitle {
    margin-top: 16rem;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    color: var(--textPrimary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 2.8rem;
    line-height: 0.4rem;
    font-weight: 200;
  }

  .pageTitle span {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export default DestinationWrapper;
