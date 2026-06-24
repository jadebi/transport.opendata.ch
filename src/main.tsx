import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import Landing from './pages/Landing';
import "./styles/global.css";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Stations from './pages/Stations';
import Stationboard from './pages/Stationboard';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <HeroUIProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow">
              <Routes>
                <Route index path="/" element={<Landing />} />
                <Route path="stations" element={<Stations />} />
                <Route path="station/:stationId" element={<Stationboard />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </HashRouter>
      </HeroUIProvider>
    </ErrorBoundary>
  </StrictMode>,
)
