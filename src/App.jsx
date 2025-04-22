import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Session from './pages/Sessions';
import Seats from './pages/Seats';
import Success from './pages/Success';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:idFilme" element={<Session />} />
        <Route path="/assentos/:idSessao" element={<Seats />} />
        <Route path="/sucesso" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
