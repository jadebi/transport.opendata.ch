import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import Landing from './pages/Landing';
import "./styles/global.css";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Stationboard from './pages/Stationboard';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Landing />} />
          <Route index path="stationboard" element={<Stationboard />} />
        </Routes>
      </HashRouter>
    </HeroUIProvider>
  </StrictMode>,
)
