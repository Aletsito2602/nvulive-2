import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout'; // Re-importar Layout
import Home from './components/pages/Home'; // Re-importar Home
import Calendar from './components/pages/Calendar';
import Educators from './components/pages/Educators'; // Importar nueva página
import EducatorDetail from './components/pages/LiveEducators/EducatorDetail'; // Importar detalle
import EducatorSessions from './components/pages/EducatorsSessions/EducatorSessions'; // Importar nueva página
import Academy from './components/pages/Academy';
import Forum from './components/pages/Forum';
import News from './components/pages/News';
import Scanner from './components/pages/Scanner'; // Importar página Scanner
import BackOffice from './components/pages/BackOffice';
import LoginPage from './components/pages/LoginPage'; // Corregir ruta a la ubicación real
import LanguageSelector from './components/pages/LanguageSelector'; // Importar selector
import UserProfile from './components/pages/UserProfile'; // Importar la nueva página de perfil
import EducatorSessionsLayout from './components/layout/EducatorSessionsLayout'; // Importar el nuevo layout
import Markups from './components/pages/Markups';
import TradingJournal from './components/pages/TradingJournal';
import BeyondCharts from './components/pages/BeyondCharts';
import './styles/global.css';
import { useEffect } from 'react';
import RequireAuth from './components/RequireAuth';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      {/* Layout envuelve las rutas que lo usan */}
      {/* La ruta de detalle puede necesitar un layout diferente o ninguno */}
      <Routes>
        {/* Ruta inicial -> Selector de Idioma (sin Layout) */}
        <Route path="/login" element={
          localStorage.getItem('nvuUserData')
            ? <Navigate to="/" replace />
            : <LoginPage />
        } />
        <Route path="/language" element={<LanguageSelector />} />
        
        {/* Rutas Protegidas (asumiendo que Layout implica autenticación) */}
        {/* En un caso real, estas rutas estarían dentro de un componente 
            que verifica la autenticación antes de renderizar el Layout */}
        <Route path="/" element={<RequireAuth><Layout><Home /></Layout></RequireAuth>} />
        <Route path="/calendario" element={<RequireAuth><Layout><Calendar /></Layout></RequireAuth>} />
        <Route path="/educadores" element={<RequireAuth><Layout><Educators /></Layout></RequireAuth>} /> 
        <Route path="/educadores/:educatorId" element={<RequireAuth><Layout><EducatorDetail /></Layout></RequireAuth>} />
        <Route path="/educadores/:educatorId/sesiones" element={<RequireAuth><EducatorSessionsLayout><EducatorSessions /></EducatorSessionsLayout></RequireAuth>} />
        <Route path="/academia" element={<RequireAuth><Layout><Academy /></Layout></RequireAuth>} />
        <Route path="/foro" element={<RequireAuth><Layout><Forum /></Layout></RequireAuth>} />
        <Route path="/scanner" element={<RequireAuth><Layout><Scanner /></Layout></RequireAuth>} />
        <Route path="/back-office" element={<RequireAuth><Layout><BackOffice /></Layout></RequireAuth>} />
        <Route path="/perfil" element={<RequireAuth><Layout><UserProfile /></Layout></RequireAuth>} /> {/* Nueva ruta para el perfil */}
        <Route path="/news" element={<RequireAuth><Layout><News /></Layout></RequireAuth>} />
        <Route path="/markups" element={<RequireAuth><Layout><Markups /></Layout></RequireAuth>} />
        <Route path="/trading-journal" element={<RequireAuth><Layout><TradingJournal /></Layout></RequireAuth>} />
        <Route path="/beyond-charts" element={<RequireAuth><Layout><BeyondCharts /></Layout></RequireAuth>} />
        
        {/* Puedes añadir una ruta comodín 404 si lo deseas */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;