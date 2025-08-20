import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import SobreMim from './pages/SobreMim';
import Livros from './pages/Livros';
import Noah from './pages/Noah';
import Artbook from './pages/Artbook';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<SobreMim />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/noah" element={<Noah />} />
        <Route path='/art' element={<Artbook/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
