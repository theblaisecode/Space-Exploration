import styled from "styled-components";
import technologyBg from "../assets/technology/background-technology-desktop.jpg";

const TechnologyWrapper = styled.section`
  background: url(${technologyBg}) no-repeat bottom center/cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--textLight);
  position: relative;
`;

export default TechnologyWrapper;
