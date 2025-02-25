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

  @media screen and (max-width: 550px), screen and (max-height: 550px) {
    .destinationContent {
      align-items: center;
    }
  }
`;

export default DestinationWrapper;
