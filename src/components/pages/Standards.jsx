import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Standards = ({ setCurrentScreen, setUserProgress }) => {
  const [xmlStandard, setXmlStandard] = useState('dublin');

  const xmlExamples = {
    dublin: `<?xml version="1.0"?>
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:title>Introducción a Metadatos</dc:title>
  <dc:creator>Universidad San Buenaventura</dc:creator>
  <dc:subject>Gestión de información digital</dc:subject>
  <dc:description>Curso educativo sobre metadatos</dc:description>
  <dc:date>2025-10-15</dc:date>
  <dc:format>text/html</dc:format>
  <dc:language>es</dc:language>
</metadata>`,
    exif: `<?xml version="1.0"?>
<exif>
  <Make>Canon</Make>
  <Model>EOS 5D Mark IV</Model>
  <DateTime>2025:10:15 14:30:22</DateTime>
  <FocalLength>50mm</FocalLength>
  <ISO>400</ISO>
  <GPSLatitude>10.3910</GPSLatitude>
  <GPSLongitude>-75.4794</GPSLongitude>
  <GPSAltitude>2m</GPSAltitude>
</exif>`,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Curso interactivo sobre 
  metadatos y gestión de información digital">
  <meta name="keywords" content="metadatos, XML, Dublin Core, 
  gestión información, datos estructurados">
  <meta name="author" content="USB Cartagena">
  <meta name="robots" content="index, follow">
  <title>Metadatos: datos sobre datos | USB</title>
</head>
</html>`
  };

  const standardInfo = {
    dublin: {
      title: 'Dublin Core - Metadatos bibliotecarios',
      description: 'Estándar internacional para describir recursos digitales y físicos. Usado en bibliotecas, archivos y museos.'
    },
    exif: {
      title: 'EXIF - Metadatos de imágenes digitales',
      description: 'Formato estándar que almacena información de captura en fotografías digitales (cámara, configuración, ubicación).'
    },
    html: {
      title: 'HTML Meta Tags - Metadatos para páginas web',
      description: 'Etiquetas meta del HTML que ayudan a buscadores y redes sociales a entender el contenido de tu página web.'
    }
  };

  return (
    <div className="screen-container">
      <div className="card">
        <h2 className="screen-title">Estándares de metadatos</h2>
        
        <p className="section-text">
          Los estándares facilitan la <strong>interoperabilidad</strong> entre sistemas. 
          Explora los esquemas más utilizados:
        </p>

        <div className="standards-tabs">
          <button
            onClick={() => setXmlStandard('dublin')}
            className={`tab-button ${xmlStandard === 'dublin' ? 'tab-active' : ''}`}
          >
            Dublin Core
          </button>
          <button
            onClick={() => setXmlStandard('exif')}
            className={`tab-button ${xmlStandard === 'exif' ? 'tab-active' : ''}`}
          >
            EXIF
          </button>
          <button
            onClick={() => setXmlStandard('html')}
            className={`tab-button ${xmlStandard === 'html' ? 'tab-active' : ''}`}
          >
            HTML Meta Tags
          </button>
        </div>

        <div className="standard-example">
          <h3 className="standard-title">{standardInfo[xmlStandard].title}</h3>
          <p className="standard-description">
            {standardInfo[xmlStandard].description}
          </p>
          
          <pre className="code-block">
            {xmlExamples[xmlStandard]}
          </pre>
        </div>

        <div className="standards-grid">
          <div className="standards-info">
            <h4 className="info-title">Otros estándares importantes:</h4>
            <ul className="standards-list">
              <li className="standard-item">
                <span className="bullet">•</span>
                <div>
                  <strong>RDF (Resource Description Framework):</strong>
                  <p>Marco para descripción de recursos en la web semántica</p>
                </div>
              </li>
              <li className="standard-item">
                <span className="bullet">•</span>
                <div>
                  <strong>JSON-LD (JSON Linked Data):</strong>
                  <p>Formato ligero para datos enlazados, usado en APIs modernas</p>
                </div>
              </li>
              <li className="standard-item">
                <span className="bullet">•</span>
                <div>
                  <strong>Schema.org:</strong>
                  <p>Vocabularios para mejorar el SEO y resultados de búsqueda</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="benefits-card">
            <h4 className="benefits-title">✓ Beneficios de usar estándares:</h4>
            <ul className="benefits-list">
              <li className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <span><strong>Interoperabilidad:</strong> Sistemas diferentes se comunican fácilmente</span>
              </li>
              <li className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <span><strong>Mejor indexación:</strong> Google y otros buscadores entienden tu contenido</span>
              </li>
              <li className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <span><strong>Gestión eficiente:</strong> Organización consistente de la información</span>
              </li>
              <li className="benefit-item">
                <CheckCircle className="benefit-icon" />
                <span><strong>Preservación digital:</strong> Los datos perduran en el tiempo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="case-study">
          <h4 className="case-title">Caso práctico</h4>
          <p className="case-text">
            Cuando compartes un enlace en Facebook o Twitter, las redes sociales leen los metadatos 
            HTML (Open Graph y Twitter Cards) para generar una vista previa atractiva con imagen, 
            título y descripción. ¡Esos son metadatos en acción!
          </p>
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={() => setCurrentScreen('structure')}
          className="btn-secondary"
        >
          ← Anterior
        </button>
        <button
          onClick={() => {
            setCurrentScreen('applications');
            setUserProgress(4);
          }}
          className="btn-primary"
        >
          Ver aplicaciones prácticas →
        </button>
      </div>
    </div>
  );
};

export default Standards;