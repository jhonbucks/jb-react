import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Index from './pages/Index';
import SobreMim from './pages/SobreMim';
import Livros from './pages/Livros';
import Noah from './pages/Noah';
import Artbook from './pages/Artbook';
import NoahAlmas from './pages/NoahAlmas';
import Desenhos from './pages/Desenhos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/noah" element={<Noah />} />
        <Route path="/art" element={<Artbook />} />
        <Route path="/noahalmas" element={<NoahAlmas />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/desenhos" element={<Desenhos />} />
      </Routes>
    </BrowserRouter>
  );
}
