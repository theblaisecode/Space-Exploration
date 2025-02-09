import styled from "styled-components";
import crewBg from "../assets/crew/background-crew-desktop.jpg";

const CrewWrapper = styled.section`
  background: url(${crewBg}) no-repeat bottom center/cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--textLight);
  position: relative;

  .crewContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media screen and (max-width: 550px), screen and (max-height: 550px) {
    .crewContent {
      align-items: center;
    }
  }
`;

export default CrewWrapper;
