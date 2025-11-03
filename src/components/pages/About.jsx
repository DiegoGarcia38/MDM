import React from 'react';
import { ArrowLeft } from 'lucide-react';

const About = ({ setCurrentScreen, setUserProgress }) => {
  return (
    <div className="screen-container">
      <div className="screen-header">
        <button
          onClick={() => setCurrentScreen('home')}
          className="back-button"
        >
          <ArrowLeft className="button-icon" />
          Volver al inicio
        </button>
      </div>

      <div className="card">
        <h2 className="screen-title">Información del curso</h2>
        
        <div className="content-grid">
          <div className="info-card bg-primary-light">
            <h3 className="info-card-title">📌 Objetivo general</h3>
            <p className="info-card-text">
              Comprender qué son los metadatos, su estructura, utilidad y aplicación en diferentes 
              contextos digitales a través de una página web interactiva.
            </p>
          </div>

          <div className="info-card bg-success-light">
            <h3 className="info-card-title">🎯 Objetivos específicos</h3>
            <ul className="info-list">
              <li className="info-list-item">
                <span className="list-number">1.</span>
                <span>Definir el concepto de metadato y su propósito en la organización de la información</span>
              </li>
              <li className="info-list-item">
                <span className="list-number">2.</span>
                <span>Reconocer los diferentes tipos y formatos de metadatos</span>
              </li>
              <li className="info-list-item">
                <span className="list-number">3.</span>
                <span>Analizar ejemplos de representación de metadatos en XML y otros lenguajes</span>
              </li>
              <li className="info-list-item">
                <span className="list-number">4.</span>
                <span>Aplicar metadatos en ejemplos prácticos (archivos multimedia y páginas web)</span>
              </li>
              <li className="info-list-item">
                <span className="list-number">5.</span>
                <span>Evaluar la importancia de los metadatos en la búsqueda y clasificación de información</span>
              </li>
            </ul>
          </div>

          <div className="info-card bg-accent-light">
            <h3 className="info-card-title">📚 Estructura del curso</h3>
            <div className="structure-list">
              <div className="structure-item">
                <div className="structure-number">1</div>
                <span>¿Qué son los metadatos? - Conceptos básicos</span>
              </div>
              <div className="structure-item">
                <div className="structure-number">2</div>
                <span>Estructura y tipos - Clasificación de metadatos</span>
              </div>
              <div className="structure-item">
                <div className="structure-number">3</div>
                <span>Estándares - Dublin Core, EXIF, HTML Meta Tags</span>
              </div>
              <div className="structure-item">
                <div className="structure-number">4</div>
                <span>Aplicaciones prácticas - Casos de uso reales</span>
              </div>
              <div className="structure-item">
                <div className="structure-number">5</div>
                <span>Actividades interactivas - Quiz y ejercicios</span>
              </div>
            </div>
          </div>

          <div className="info-card bg-gray-light">
            <h3 className="info-card-title">👥 Equipo de desarrollo</h3>
            <div className="team-grid">
              <div>
                <p className="team-role">Consultor:</p>
                <p>Carlos Cortés Fuentes</p>
              </div>
              <div>
                <p className="team-role">Autores:</p>
                <p>Ubiet López, Juan García, Rommel Ospino</p>
              </div>
              <div className="team-full">
                <p className="team-role">Institución:</p>
                <p>Universidad San Buenaventura de Cartagena</p>
                <p className="team-contact">
                  Contacto: info@usbctg.edu.co | Tel: (605) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentScreen('concept');
            setUserProgress(1);
          }}
          className="btn-primary btn-full"
        >
          Iniciar curso
        </button>
      </div>
    </div>
  );
};

export default About;