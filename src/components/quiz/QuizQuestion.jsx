import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, X, Code } from 'lucide-react';

const Quiz = ({ setCurrentScreen, setUserProgress }) => {
  const [quizAnswer, setQuizAnswer] = useState(null);

  const quizOptions = [
    { id: 'a', text: 'El título de un documento', correct: true },
    { id: 'b', text: 'El tamaño de un archivo en megabytes', correct: false },
    { id: 'c', text: 'La fecha de última modificación', correct: false },
    { id: 'd', text: 'El formato de archivo (PDF, DOCX)', correct: false }
  ];

  return (
    <div className="screen-container">
      <div className="card">
        <h2 className="screen-title">Actividades interactivas</h2>
        
        <div className="quiz-section">
          <div className="quiz-header">
            <h3 className="quiz-title">
              📝 Quiz de comprensión
            </h3>
            <span className="quiz-progress">
              Pregunta 1 de 5
            </span>
          </div>
          
          <p className="quiz-question">
            ¿Cuál de los siguientes es un ejemplo de metadato <strong>descriptivo</strong>?
          </p>
          
          <div className="quiz-options">
            {quizOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setQuizAnswer(option.id)}
                className={`quiz-option ${quizAnswer === option.id ? (option.correct ? 'option-correct' : 'option-incorrect') : ''}`}
              >
                <div className="option-content">
                  <span className="option-text">
                    <span className="option-letter">{option.id.toUpperCase()}.</span>
                    {option.text}
                  </span>
                  {quizAnswer === option.id && (
                    option.correct ? 
                    <CheckCircle className="option-icon correct" /> :
                    <X className="option-icon incorrect" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {quizAnswer && (
            <div className={`quiz-feedback ${quizAnswer === 'a' ? 'feedback-correct' : 'feedback-incorrect'}`}>
              <p className="feedback-title">
                {quizAnswer === 'a' 
                  ? '✓ ¡Excelente! Respuesta correcta'
                  : '✗ Respuesta incorrecta'
                }
              </p>
              <p className="feedback-text">
                {quizAnswer === 'a' 
                  ? 'El título es un metadato descriptivo porque identifica y describe el contenido del recurso. Los metadatos descriptivos ayudan a entender "qué es" el documento.'
                  : 'Los metadatos descriptivos identifican y describen el recurso (título, autor, descripción, palabras clave). Las opciones B, C y D son metadatos administrativos que gestionan el recurso.'
                }
              </p>
            </div>
          )}
        </div>

        <div className="exercise-section">
          <h3 className="exercise-title">
            <Code className="exercise-icon" />
            🛠️ Ejercicio práctico: Crea tu XML
          </h3>
          <p className="exercise-description">
            Completa el siguiente código XML con metadatos para describir tu libro favorito. 
            Incluye título, autor y año de publicación:
          </p>
          <textarea
            className="code-editor"
            placeholder={`<?xml version="1.0" encoding="UTF-8"?>
<libro>
  <metadatos>
    <titulo>Escribe el título aquí...</titulo>
    <autor>Nombre del autor...</autor>
    <año>Año de publicación...</año>
    <genero>Género literario...</genero>
    <editorial>Nombre de la editorial...</editorial>
  </metadatos>
</libro>`}
          />
          <p className="exercise-tip">
            💡 Tip: Respeta la estructura XML con etiquetas de apertura y cierre correctas.
          </p>
        </div>

        <div className="analysis-section">
          <h3 className="analysis-title">🎯 Actividad de análisis</h3>
          <p className="analysis-description">
            Observa esta fotografía digital y sus metadatos EXIF. ¿Qué información puedes obtener sin ver la imagen?
          </p>
          <div className="metadata-display">
            <div className="metadata-grid">
              <div><strong>Cámara:</strong> Canon EOS R5</div>
              <div><strong>Fecha:</strong> 2025-10-15 16:45:00</div>
              <div><strong>Ubicación:</strong> 10.3910°N, 75.4794°W</div>
              <div><strong>ISO:</strong> 400</div>
              <div><strong>Apertura:</strong> f/2.8</div>
              <div><strong>Velocidad:</strong> 1/500s</div>
            </div>
          </div>
          <p className="analysis-reflection">
            <strong>Reflexiona:</strong> Estos metadatos revelan que es una foto tomada en Cartagena, 
            Colombia, en condiciones de buena luz, probablemente al atardecer. ¡Todo sin ver la imagen!
          </p>
        </div>
              <div className="navigation-buttons">
        <button
          onClick={() => setCurrentScreen('applications')}
          className="btn-secondary"
        >
          <ArrowLeft className="button-icon" />
          Anterior
        </button>
        <button
          onClick={() => {
            setCurrentScreen('evaluation');
            setUserProgress(6);
          }}
          className="btn-primary"
        >
          Ir a evaluación final →
        </button>
      </div>
      </div>


    </div>
  );
};

export default Quiz;