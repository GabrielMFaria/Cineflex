import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

export default function Session() {
  const { idFilme } = useParams();
  const [sessoes, setSessoes] = useState(null);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
    axios.get(URL)
      .then(res => setSessoes(res.data))
      .catch(err => console.log(err.response.data));
  }, [idFilme]);

  if (!sessoes) return <div>Carregando...</div>;

  return (
    <Container>
      <Titulo>Selecione o horário</Titulo>

      {sessoes.days.map(sessao => (
        <Dia key={sessao.id}>
          <Data>{sessao.weekday}, {sessao.date}</Data>
          <Horarios>
            {sessao.showtimes.map(horario => (
              <Link to={`/assentos/${horario.id}`} key={horario.id}>
                <Horario>{horario.name}</Horario>
              </Link>
            ))}
          </Horarios>
        </Dia>
      ))}

      <Footer
        posterURL={sessoes.posterURL}
        title={sessoes.title}
        subtitle=""
      />
    </Container>
  );
}


const Container = styled.div`
  background-color: #1E1E1E;
  min-height: calc(100vh - 70px - 100px); 
  padding: 24px;
  color: #FFFFFF;
`;

const Titulo = styled.h2`
  text-align: center;
  font-size: 22px;
  color: #FFFFFF;
  margin-bottom: 32px;
`;

const Dia = styled.div`
  margin-bottom: 28px;
`;

const Data = styled.h3`
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 12px;
  border-bottom: 1px solid #444444;
  padding-bottom: 4px;
`;

const Horarios = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Horario = styled.button`
  background-color: transparent;
  border: 1px solid #ee897f;
  color: #ee897f;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ee897f;
    color: #1E1E1E;
  }
`;
