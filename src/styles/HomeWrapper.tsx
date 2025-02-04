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
`;

export default HomeWrapper;
