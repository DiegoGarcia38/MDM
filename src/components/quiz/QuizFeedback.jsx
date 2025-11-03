import React from 'react';
import { Award, CheckCircle, FileText } from 'lucide-react';

const Evaluation = ({ setCurrentScreen }) => {
  return (
    <div className="evaluation-container">
      <div className="evaluation-card">
        <div className="evaluation-logo">
          <div className="logo-circle success">
            <Award className="logo-icon" />
          </div>
        </div>
        
        <h2 className="evaluation-title">¡Felicitaciones!</h2>
        <p className="evaluation-subtitle">
          Has completado exitosamente el módulo de metadatos. Ahora comprendes su estructura, 
          tipos, estándares y aplicaciones prácticas en el mundo digital.
        </p>
        
        <div className="progress-summary">
          <h3 className="summary-title">📊 Tu progreso final:</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value primary">85%</div>
              <div className="stat-label">Puntuación general</div>
            </div>
            <div className="stat-card">
              <div className="stat-value success">5/5</div>
              <div className="stat-label">Secciones completadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-value accent">3/3</div>
              <div className="stat-label">Ejercicios realizados</div>
            </div>
          </div>
          
          <div className="learned-list">
            <h4 className="learned-title">✓ Has aprendido a:</h4>
            <ul className="learned-items">
              <li className="learned-item">
                <CheckCircle className="learned-icon" />
                <span>Definir qué son los metadatos y su importancia</span>
              </li>
              <li className="learned-item">
                <CheckCircle className="learned-icon" />
                <span>Distinguir entre metadatos descriptivos, administrativos y estructurales</span>
              </li>
              <li className="learned-item">
                <CheckCircle className="learned-icon" />
                <span>Reconocer estándares como Dublin Core, EXIF y HTML Meta Tags</span>
              </li>
              <li className="learned-item">
                <CheckCircle className="learned-icon" />
                <span>Aplicar metadatos en contextos reales con XML</span>
              </li>
              <li className="learned-item">
                <CheckCircle className="learned-icon" />
                <span>Analizar casos prácticos en buscadores, redes sociales y más</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="next-steps">
          <h4 className="steps-title">🎓 Próximos pasos recomendados:</h4>
          <ul className="steps-list">
            <li className="step-item">
              <span className="step-number">1.</span>
              <span>Practica creando metadatos para tus propios archivos y proyectos</span>
            </li>
            <li className="step-item">
              <span className="step-number">2.</span>
              <span>Explora herramientas como ExifTool para editar metadatos de imágenes</span>
            </li>
            <li className="step-item">
              <span className="step-number">3.</span>
              <span>Investiga sobre Web Semántica y datos enlazados (Linked Data)</span>
            </li>
            <li className="step-item">
              <span className="step-number">4.</span>
              <span>Aplica metadatos en tu próximo proyecto web o multimedia</span>
            </li>
          </ul>
        </div>

        <div className="action-buttons">
          <button
            onClick={() => setCurrentScreen('home')}
            className="btn-primary"
          >
            Volver al inicio
          </button>
          <button
            onClick={() => setCurrentScreen('quiz')}
            className="btn-accent"
          >
            Revisar actividades
          </button>
          <button className="btn-success">
            Descargar certificado
          </button>
        </div>

        <div className="references">
          <h4 className="references-title">📚 Referencias y recursos adicionales:</h4>
          <ul className="references-list">
            <li className="reference-item">
              <FileText className="reference-icon" />
              <span>Dublin Core Metadata Initiative - <span className="reference-link">dublincore.org</span></span>
            </li>
            <li className="reference-item">
              <FileText className="reference-icon" />
              <span>W3C - Estándares de metadatos web - <span className="reference-link">w3.org/standards/semanticweb</span></span>
            </li>
            <li className="reference-item">
              <FileText className="reference-icon" />
              <span>Schema.org - Vocabularios estructurados - <span className="reference-link">schema.org</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;