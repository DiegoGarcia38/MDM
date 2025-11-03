import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const Concept = ({ setCurrentScreen, setUserProgress }) => {
  return (
    <div className="screen-container">
      <div className="card">
        <h2 className="screen-title">¿Qué son los metadatos?</h2>
        
        <div className="content-grid-2">
          <div>
            <h3 className="section-title">Definición técnica</h3>
            <p className="section-text">
              Los <strong>metadatos</strong> son datos estructurados que describen las características de otros datos. 
              En términos simples: <span className="highlight">"son datos sobre datos"</span>.
            </p>
            <p className="section-text">
              Se utilizan para facilitar la identificación, búsqueda, gestión y preservación de recursos digitales 
              en múltiples contextos: documentos, imágenes, páginas web, bases de datos y archivos multimedia.
            </p>
          </div>
          
          <div className="examples-card">
            <h3 className="examples-title">Ejemplos cotidianos:</h3>
            <div className="examples-list">
              <div className="example-item">
                <div className="example-header">
                  <span className="example-icon">📷</span>
                  <span className="example-name">Fotografías digitales</span>
                </div>
                <p className="example-detail">Fecha, hora, ubicación GPS, modelo de cámara, ISO, apertura</p>
              </div>
              <div className="example-item">
                <div className="example-header">
                  <span className="example-icon">📄</span>
                  <span className="example-name">Documentos</span>
                </div>
                <p className="example-detail">Autor, fecha de creación y modificación, tamaño, versión</p>
              </div>
              <div className="example-item">
                <div className="example-header">
                  <span className="example-icon">🌐</span>
                  <span className="example-name">Páginas web</span>
                </div>
                <p className="example-detail">Título, descripción, palabras clave, idioma, codificación</p>
              </div>
              <div className="example-item">
                <div className="example-header">
                  <span className="example-icon">🎵</span>
                  <span className="example-name">Archivos de audio</span>
                </div>
                <p className="example-detail">Artista, álbum, año, género, duración, calidad de bits</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flow-diagram">
          <h3 className="flow-title">💡 Flujo de metadatos en la web</h3>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-icon">📁</div>
              <p className="step-title">1. Recurso Digital</p>
              <p className="step-description">Imagen, video, documento</p>
            </div>
            <ChevronRight className="flow-arrow" />
            <div className="flow-step">
              <div className="step-icon">🏷️</div>
              <p className="step-title">2. Metadatos</p>
              <p className="step-description">Descripción estructurada</p>
            </div>
            <ChevronRight className="flow-arrow" />
            <div className="flow-step">
              <div className="step-icon">🗄️</div>
              <p className="step-title">3. Indexación</p>
              <p className="step-description">Almacenamiento eficiente</p>
            </div>
            <ChevronRight className="flow-arrow" />
            <div className="flow-step">
              <div className="step-icon">🔍</div>
              <p className="step-title">4. Búsqueda</p>
              <p className="step-description">Recuperación rápida</p>
            </div>
          </div>
        </div>

        <div className="summary-card">
          <h3 className="summary-title">✓ Resumen clave</h3>
          <p className="summary-text">
            Los metadatos son esenciales para organizar, buscar y gestionar información digital. 
            Funcionan como "etiquetas inteligentes" que permiten a humanos y máquinas comprender 
            el contenido sin necesidad de abrirlo. Son la base de la búsqueda efectiva en internet, 
            bibliotecas digitales y sistemas de gestión de contenidos.
          </p>
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={() => setCurrentScreen('about')}
          className="btn-secondary"
        >
          <ArrowLeft className="button-icon" />
          Información del curso
        </button>
        <button
          onClick={() => {
            setCurrentScreen('structure');
            setUserProgress(2);
          }}
          className="btn-primary"
        >
          Ver estructura y tipos →
        </button>
      </div>
    </div>
  );
};

export default Concept;