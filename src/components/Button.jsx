import styled from "styled-components";

export default function Button({ children, onClick, type = "button" }) {
  return <StyledButton onClick={onClick} type={type}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: #ee897f;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
`;
