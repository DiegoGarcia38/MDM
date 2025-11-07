import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Applications = ({ setCurrentScreen, setUserProgress }) => {
  return (
    <div className="screen-container">
      <div className="card">
        <h2 className="screen-title">Aplicaciones prácticas de metadatos</h2>
        
        <p className="section-text">
          Los metadatos están presentes en casi todos los servicios digitales que usas diariamente. 
          Descubre cómo se aplican en el mundo real:
        </p>

        <div className="applications-grid">
          <div className="application-card app-search">

            <h3 className="app-title">Motores de búsqueda</h3>
            <p className="app-description">
              Los metadatos ayudan a Google, Bing y otros buscadores a entender
              el contenido web para mostrarlo en resultados relevantes.
            </p>
            <div className="app-example">
              <strong>Ejemplo:</strong> Cuando buscas "recetas de pasta", Google lee los metadatos 
              de millones de sitios web para mostrarte las más relevantes.
            </div>
          </div>
          
          <div className="application-card app-social">

            <h3 className="app-title">Redes sociales</h3>
            <p className="app-description">
              Facebook, Twitter e Instagram usan metadatos para generar previsualizaciones 
              atractivas de enlaces compartidos.
            </p>
            <div className="app-example">
              <strong>Ejemplo:</strong> Cuando compartes un artículo, aparece automáticamente 
              con imagen, título y descripción tomados de los metadatos.
            </div>
          </div>
          
          <div className="application-card app-gallery">
            <h3 className="app-title">Galerías digitales</h3>
            <p className="app-description">
              Museos, bibliotecas digitales y archivos históricos utilizan metadatos para 
              facilitar búsquedas en colecciones de millones de obras.
            </p>
            <div className="app-example">
              <strong>Ejemplo:</strong> El Museo del Prado usa Dublin Core para catalogar 
              más de 35,000 obras de arte disponibles online.
            </div>
          </div>
          
          <div className="application-card app-streaming">

            <h3 className="app-title">Streaming</h3>
            <p className="app-description">
              Spotify, Netflix y YouTube organizan su contenido usando metadatos para 
              recomendar contenidos personalizados.
            </p>
            <div className="app-example">
              <strong>Ejemplo:</strong> Spotify usa metadatos de género, tempo, artista 
              y popularidad para crear listas personalizadas.
            </div>
          </div>
        </div>

        <div className="other-applications">
          <div className="app-mini-card">
            <div className="mini-icon">📚</div>
            <h4 className="mini-title">Bibliotecas digitales</h4>
            <p className="mini-description">Sistemas de catalogación</p>
          </div>
          <div className="app-mini-card">
            <div className="mini-icon">🏥</div>
            <h4 className="mini-title">Sistemas médicos</h4>
            <p className="mini-description">Historias clínicas y estudios radiológicos</p>
          </div>
          <div className="app-mini-card">
            <div className="mini-icon">🛒</div>
            <h4 className="mini-title">E-commerce</h4>
            <p className="mini-description">Catálogos de productos con especificaciones</p>
          </div>
        </div>

        <div className="impressive-fact">
          <h3 className="fact-title">Dato curioso</h3>
          <p className="fact-text">
            Sin metadatos, sería prácticamente imposible encontrar información específica entre los 
            <strong> más de 1.8 mil millones de sitios web</strong> que existen actualmente en internet.
          </p>
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={() => setCurrentScreen('standards')}
          className="btn-secondary"
        >
          ← Anterior
        </button>
        <button
          onClick={() => {
            setCurrentScreen('quiz');
            setUserProgress(5);
          }}
          className="btn-primary"
        >
          Ir a actividades interactivas →
        </button>
      </div>
    </div>
  );
};

export default Applications;