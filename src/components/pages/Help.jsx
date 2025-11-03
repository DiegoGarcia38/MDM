import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Help = ({ setCurrentScreen }) => {
  return (
    <div className="screen-container">
      <div className="screen-header">
        <button
          onClick={() => setCurrentScreen('home')}
          className="back-button"
        >
          <ArrowLeft className="button-icon" />
          Volver
        </button>
      </div>

      <div className="card">
        <h2 className="screen-title">Centro de ayuda</h2>
        
        <div className="help-content">
          <div className="help-card bg-primary-light">
            <h3 className="help-card-title">🧭 ¿Cómo navegar?</h3>
            <ul className="help-list">
              <li>• Usa el menú superior para moverte entre secciones</li>
              <li>• Los botones "Siguiente" te guían en el orden sugerido</li>
              <li>• Puedes regresar en cualquier momento con el botón "Volver"</li>
              <li>• Tu progreso se guarda automáticamente</li>
            </ul>
          </div>

          <div className="help-card bg-success-light">
            <h3 className="help-card-title">❓ Preguntas frecuentes</h3>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-question">¿Necesito conocimientos previos?</summary>
                <p className="faq-answer">No, el curso parte desde conceptos básicos. Solo necesitas nociones básicas de informática.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">¿Cuánto tiempo toma completar el curso?</summary>
                <p className="faq-answer">Aproximadamente 2-3 horas, pero puedes avanzar a tu propio ritmo.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-question">¿Puedo descargar los materiales?</summary>
                <p className="faq-answer">Sí, al final puedes descargar ejemplos de código y un resumen en PDF.</p>
              </details>
            </div>
          </div>

          <div className="help-card bg-warning-light">
            <h3 className="help-card-title">📧 Soporte técnico</h3>
            <p className="help-text">
              Si encuentras problemas técnicos o tienes dudas sobre el contenido:
            </p>
            <div className="contact-info">
              <p>📧 Email: <span className="contact-highlight">soporte.multimedia@usbctg.edu.co</span></p>
              <p>💬 Chat en línea: Disponible L-V 8am-6pm</p>
              <p>📞 Teléfono: (605) 123-4567 ext. 2345</p>
            </div>
          </div>

          <div className="help-card bg-accent-light">
            <h3 className="help-card-title">♿ Accesibilidad</h3>
            <ul className="help-list">
              <li>• Este sitio es compatible con lectores de pantalla</li>
              <li>• Todas las imágenes tienen texto alternativo descriptivo</li>
              <li>• Los videos incluyen subtítulos en español</li>
              <li>• Puedes ajustar el tamaño del texto con Ctrl + / Ctrl -</li>
              <li>• Navegación completa por teclado (Tab, Enter, flechas)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;