import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Structure = ({ setCurrentScreen, setUserProgress }) => {
  return (
    <div className="screen-container">
      <div className="card">
        <h2 className="screen-title">Estructura y tipos de metadatos</h2>
        
        <div className="types-grid">
          <div className="type-card type-descriptive">
            <div className="type-icon">📝</div>
            <h3 className="type-title">Descriptivos</h3>
            <p className="type-subtitle">Identifican y describen el recurso</p>
            <ul className="type-list">
              <li><strong>Título:</strong> Nombre del recurso</li>
              <li><strong>Autor/Creador:</strong> Responsable</li>
              <li><strong>Descripción:</strong> Resumen del contenido</li>
              <li><strong>Palabras clave:</strong> Términos de búsqueda</li>
              <li><strong>Idioma:</strong> Lengua del contenido</li>
            </ul>
          </div>
          
          <div className="type-card type-administrative">
            <div className="type-icon">⚙️</div>
            <h3 className="type-title">Administrativos</h3>
            <p className="type-subtitle">Gestionan el ciclo de vida</p>
            <ul className="type-list">
              <li><strong>Fecha de creación:</strong> Cuándo se creó</li>
              <li><strong>Última modificación:</strong> Actualizaciones</li>
              <li><strong>Derechos de autor:</strong> Licencias</li>
              <li><strong>Formato:</strong> Tipo de archivo</li>
              <li><strong>Tamaño:</strong> Peso del archivo</li>
            </ul>
          </div>
          
          <div className="type-card type-structural">
            <div className="type-icon">🔗</div>
            <h3 className="type-title">Estructurales</h3>
            <p className="type-subtitle">Relacionan componentes</p>
            <ul className="type-list">
              <li><strong>Jerarquías:</strong> Organización interna</li>
              <li><strong>Relaciones:</strong> Enlaces entre partes</li>
              <li><strong>Secuencias:</strong> Orden de elementos</li>
              <li><strong>Versiones:</strong> Historial de cambios</li>
              <li><strong>Dependencias:</strong> Archivos relacionados</li>
            </ul>
          </div>
        </div>

        <div className="code-example">
          <h3 className="code-title">📄 Ejemplo práctico en XML</h3>
          <p className="code-description">
            Observa cómo se estructuran los metadatos en formato XML. Este estándar permite 
            que tanto humanos como máquinas comprendan la información:
          </p>
          <pre className="code-block">
{`<?xml version="1.0" encoding="UTF-8"?>
<documento>
  <metadatos>
    <!-- Metadatos descriptivos -->
    <titulo>Introducción a los Metadatos</titulo>
    <autor>Universidad San Buenaventura</autor>
    <descripcion>
      Guía educativa sobre la importancia y 
      aplicación de los metadatos
    </descripcion>
    <palabrasClave>
      <palabra>metadatos</palabra>
      <palabra>XML</palabra>
      <palabra>gestión de datos</palabra>
    </palabrasClave>
    
    <!-- Metadatos administrativos -->
    <fecha>2025-10-15</fecha>
    <formato>PDF</formato>
    <tamaño unidad="MB">2.5</tamaño>
    <licencia>Creative Commons BY-NC-SA 4.0</licencia>
    
    <!-- Metadatos estructurales -->
    <version>1.2</version>
    <idioma>es</idioma>
  </metadatos>
</documento>`}
          </pre>
          <p className="code-note">
            💡 Nota: Cada elemento entre &lt; &gt; representa un metadato específico que describe el documento.
          </p>
        </div>
      </div>

      <div className="navigation-buttons">
        <button
          onClick={() => setCurrentScreen('concept')}
          className="btn-secondary"
        >
          <ArrowLeft className="button-icon" />
          Anterior
        </button>
        <button
          onClick={() => {
            setCurrentScreen('standards');
            setUserProgress(3);
          }}
          className="btn-primary"
        >
          Ver estándares →
        </button>
      </div>
    </div>
  );
};

export default Structure;