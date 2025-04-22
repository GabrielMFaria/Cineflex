import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <TopBar onClick={() => navigate("/")}>
      <h1>Cineflex</h1>
    </TopBar>
  );
}

const TopBar = styled.header`
  height: 70px;
  background-color: #ee897f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 1;
  cursor: pointer;
`;
