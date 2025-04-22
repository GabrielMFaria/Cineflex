import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <div>Carregando...</div>;

  const { filme, data, horario, assentos, nome, cpf } = state;

  return (
    <Container>
      <Titulo>Pedido finalizado!</Titulo>

      <Box>
        <h2>Filme e sessão</h2>
        <p>{filme}</p>
        <p>{data} às {horario}</p>
      </Box>

      <Box>
        <h2>Ingressos</h2>
        {assentos.map((n, i) => (
        <p key={i}>Assento {n}</p>
        ))}
      </Box>

      <Box>
        <h2>Comprador(a)</h2>
        <p>Nome: {nome}</p>
        <p>CPF: {cpf}</p>
      </Box>

      <Button onClick={() => navigate("/")}>
        Voltar para tela inicial
      </Button>
    </Container>
  );
}


const Container = styled.div`
  background-color: #1E1E1E;
  color: #FFFFFF;
  padding: 24px;
  min-height: calc(100vh - 70px);
`;

const Titulo = styled.h1`
  color: #247A6B;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
`;

const Box = styled.div`
  margin-bottom: 32px;

  h2 {
    font-size: 20px;
    color: #ee897f;
    margin-bottom: 8px;
  }

  p {
    font-size: 18px;
    margin: 2px 0;
  }
`;

const Button = styled.button`
  background-color: #ee897f;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
`;

