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
`;

export default CrewWrapper;
