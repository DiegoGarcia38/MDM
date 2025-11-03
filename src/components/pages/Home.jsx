import React from 'react';
import { User, Calendar, HelpCircle } from 'lucide-react';

const Home = ({ setCurrentScreen, setUserProgress }) => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-header">
          <User className="home-icon" />
          <span>Consultores: Carlos Cortés | Autores: Ubiet López, Juan García, Rommel Ospino</span>
        </div>

        <div className="home-logo">
          <div className="logo-circle">
            <span className="logo-text">M</span>
          </div>
        </div>
        
        <h1 className="home-title">Metadatos</h1>
        <p className="home-subtitle">Datos sobre datos</p>
        
        <div className="home-audience">
          <h3 className="audience-title">
            <User className="audience-icon" />
            Dirigido a:
          </h3>
          <p className="audience-text">
            Estudiantes de Ingeniería Multimedia y áreas afines que deseen comprender 
            los fundamentos de los metadatos en sistemas digitales.
          </p>
        </div>

        <p className="home-description">
          Aprende qué son los metadatos, su estructura y aplicación en el mundo digital 
          a través de un recorrido interactivo con ejemplos prácticos y actividades evaluativas.
        </p>

        <div className="home-buttons">
          <button
            onClick={() => setCurrentScreen('about')}
            className="btn-secondary"
          >
            Información del curso
          </button>
          <button
            onClick={() => {
              setCurrentScreen('concept');
              setUserProgress(1);
            }}
            className="btn-primary"
          >
            Comenzar aprendizaje
          </button>
        </div>

        <div className="home-footer">
          <Calendar className="footer-icon" />
          <span>Universidad San Buenaventura de Cartagena | Octubre 2025</span>
        </div>
      </div>

      <button
        onClick={() => setCurrentScreen('help')}
        className="help-button"
      >
        <HelpCircle className="help-icon" />
      </button>
    </div>
  );
};

export default Home;