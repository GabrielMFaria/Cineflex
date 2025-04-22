import styled from "styled-components";

export default function Footer({ posterURL, title, subtitle }) {
  return (
    <Container>
      <img src={posterURL} alt={title} />
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 12px;
  border-top: 1px solid #1e1e1e;
  img {
    height: 80px;
    width: 50px;
    object-fit: cover;
    border: 2px solid #ccc;
    border-radius: 4px;
  }
  p {
    font-weight: 600;
    color: #fdf9f9;
    margin: 0;
  }
`;
