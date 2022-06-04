import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Menu from './Menu';

const Home = lazy(() => import('./pages/home/Home'));
const ColaboradorCon = lazy(() => import('./pages/colaborador/ColaboradorCon'));
const SolicitanteCon = lazy(() => import('./pages/solicitante/SolicitanteCon'));
const AtividadeCon = lazy(() => import('./pages/atividade/AtividadeCon'));

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Suspense fallback={<div>Carregando ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colaborador" element={<ColaboradorCon />} />
          <Route path="/atividade" element={<AtividadeCon />} />
          <Route path="/solicitante" element={<SolicitanteCon />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;

