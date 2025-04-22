import styled from "styled-components";

export default function SeatButton({ children, disponivel, selecionado, onClick }) {
  return (
    <Seat
      disponivel={disponivel}
      selecionado={selecionado}
      onClick={onClick}
    >
      {children}
    </Seat>
  );
}

const Seat = styled.div`
  width: 26px;
  height: 26px;
  font-size: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selecionado, disponivel }) =>
    selecionado ? "#8DD7CF" : disponivel ? "#C3CFD9" : "#FBE192"};
  border: 1px solid ${({ disponivel }) => (disponivel ? "#808F9D" : "#F7C52B")};
  cursor: ${({ disponivel }) => (disponivel ? "pointer" : "not-allowed")};
`;
