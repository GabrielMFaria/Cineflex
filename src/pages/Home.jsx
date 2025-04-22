import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
      .then(res => setFilmes(res.data))
      .catch(err => console.log("Erro ao buscar filmes:", err));
  }, []);

  return (
    <Container>
      <Titulo>Em Cartaz</Titulo>
      <Filmes>
        {filmes.map(filme => (
          <Link to={`/sessoes/${filme.id}`} key={filme.id}>
            <Cartaz data-test="movie">
              <img src={filme.posterURL} alt={filme.title} />
            </Cartaz>
          </Link>
        ))}
      </Filmes>
    </Container>
  );
}


const Container = styled.div`
  background-color: #1E1E1E;
  min-height: calc(100vh - 70px);
  padding: 24px;
  color: #FFFFFF;
  text-align: center;
`;

const Titulo = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Filmes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Cartaz = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0,0,0,0.1);
  border-radius: 3px;
  padding: 8px;
  width: 145px;
  height: 209px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 129px;
    height: 193px;
  }
`;
