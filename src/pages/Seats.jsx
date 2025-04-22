import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';

export default function Seats() {
  const { idSessao } = useParams();
  const [dados, setDados] = useState(null);
  const [selecionados, setSelecionados] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
      .then(res => setDados(res.data))
      .catch(err => console.log(err.response.data));
  }, [idSessao]);

  function toggleAssento(id, isAvailable) {
    if (!isAvailable) {
      alert("Esse assento não está disponível");
      return;
    }
    setSelecionados(prev => (
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    ));
  }

  function reservarAssentos(e) {
    e.preventDefault();

    const body = {
      ids: selecionados,
      name: nome,
      cpf: cpf
    };

    axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", body)
      .then(() => {
        if (dados) {
          navigate("/sucesso", {
            state: {
              filme: dados.movie.title, 
              data: `${dados.day.weekday} - ${dados.day.date}`, 
              horario: dados.name, 
              assentos: dados.seats.filter(a => selecionados.includes(a.id)).map(a => a.name), 
              nome: nome,
              cpf: cpf
            }
          });
        }
      })
      .catch(err => alert("Erro ao reservar assentos"));
  }

  if (!dados) return <div>Carregando...</div>;

  return (
    <Container>
      <Titulo>Selecione o(s) assento(s)</Titulo>

      <Assentos>
        {dados.seats.map(assento => (
          <Assento
            key={assento.id}
            onClick={() => toggleAssento(assento.id, assento.isAvailable)}
            $selecionado={selecionados.includes(assento.id)}
            $disponivel={assento.isAvailable}
          >
            {assento.name}
          </Assento>
        ))}
      </Assentos>

      <Formulario onSubmit={reservarAssentos}>
        <label>
          Nome do comprador:
          <input
            type="text"
            required
            placeholder="Digite seu nome..."
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label>
          CPF do comprador:
          <input
            type="text"
            required
            placeholder="Digite seu CPF..."
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>

        <Botao type="submit">Reservar assento(s)</Botao>
      </Formulario>

      <Footer
        posterURL={dados.movie.posterURL}
        title={dados.movie.title}
        subtitle={`${dados.day.weekday} - ${dados.name}`}
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
  margin-bottom: 24px;
`;

const Assentos = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 8px;
  margin-bottom: 24px;
`;

const Assento = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  border-radius: 12px;
  cursor: ${({ $disponivel }) => ($disponivel ? 'pointer' : 'not-allowed')};

  background-color: ${({ $selecionado, $disponivel }) => {
    if (! $disponivel) return '#C3CFD9'; 
    if ($selecionado) return '#fadbc5'; 
    return '#1AAE9E'; 
  }};

  border: 1px solid ${({ $selecionado, $disponivel }) => {
    if (! $disponivel) return '#7B8B99'; 
    if ($selecionado) return '#ee897f'; 
    return '#0E7D71'; 
  }};

  color: ${({ $disponivel }) => ($disponivel ? '#000000' : '#C3CFD9')};
`;

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;

  input {
    width: 100%;
    padding: 8px;
    border-radius: 3px;
    border: none;
    margin-top: 4px;
  }
`;

const Botao = styled.button`
  margin-top: 16px;
  background-color: #ee897f;
  color: #FFFFFF;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
