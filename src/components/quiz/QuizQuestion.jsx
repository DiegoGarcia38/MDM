import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, X, Code, ChevronLeft, ChevronRight } from 'lucide-react';

const Quiz = ({ setCurrentScreen, setUserProgress }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: '¿Cuál de los siguientes es un ejemplo de metadato descriptivo?',
      options: [
        { id: 'a', text: 'El título de un documento', correct: true },
        { id: 'b', text: 'El tamaño de un archivo en megabytes', correct: false },
        { id: 'c', text: 'La fecha de última modificación', correct: false },
        { id: 'd', text: 'El formato de archivo (PDF, DOCX)', correct: false }
      ],
      explanation: {
        correct: 'El título es un metadato descriptivo porque identifica y describe el contenido del recurso.',
        incorrect: 'Los metadatos descriptivos identifican y describen el recurso (título, autor, descripción, palabras clave).'
      }
    },
    {
      id: 2,
      question: '¿Qué tipo de metadato almacena información sobre la ubicación GPS de una fotografía?',
      options: [
        { id: 'a', text: 'Metadatos descriptivos', correct: false },
        { id: 'b', text: 'Metadatos administrativos', correct: true },
        { id: 'c', text: 'Metadatos estructurales', correct: false },
        { id: 'd', text: 'Metadatos técnicos', correct: false }
      ],
      explanation: {
        correct: 'Correcto! La ubicación GPS es un metadato administrativo que ayuda a gestionar y organizar el recurso.',
        incorrect: 'La ubicación GPS es un metadato administrativo, ya que ayuda en la gestión y organización del recurso.'
      }
    },
    {
      id: 3,
      question: '¿Cuál de estos estándares se utiliza principalmente para metadatos bibliotecarios?',
      options: [
        { id: 'a', text: 'EXIF', correct: false },
        { id: 'b', text: 'Dublin Core', correct: true },
        { id: 'c', text: 'HTML Meta Tags', correct: false },
        { id: 'd', text: 'JSON-LD', correct: false }
      ],
      explanation: {
        correct: 'Exacto! Dublin Core es el estándar internacional para describir recursos en bibliotecas y archivos.',
        incorrect: 'Dublin Core es el estándar especializado para metadatos bibliotecarios y de archivos.'
      }
    },
    {
      id: 4,
      question: '¿Qué información NO sería considerada un metadato estructural?',
      options: [
        { id: 'a', text: 'El orden de los capítulos en un libro', correct: false },
        { id: 'b', text: 'Las relaciones entre archivos en un proyecto', correct: false },
        { id: 'c', text: 'El autor de un documento', correct: true },
        { id: 'd', text: 'La jerarquía de secciones en una página web', correct: false }
      ],
      explanation: {
        correct: 'Correcto! El autor es un metadato descriptivo, no estructural.',
        incorrect: 'El autor es un metadato descriptivo. Los estructurales definen relaciones y organización interna.'
      }
    },
    {
      id: 5,
      question: '¿Para qué sirven principalmente los metadatos en los motores de búsqueda?',
      options: [
        { id: 'a', text: 'Aumentar la velocidad de carga', correct: false },
        { id: 'b', text: 'Mejorar la comprensión y clasificación del contenido', correct: true },
        { id: 'c', text: 'Reducir el tamaño de los archivos', correct: false },
        { id: 'd', text: 'Encriptar la información sensible', correct: false }
      ],
      explanation: {
        correct: 'Exactamente! Los metadatos ayudan a los buscadores a entender el contenido para mostrar resultados relevantes.',
        incorrect: 'Los metadatos ayudan principalmente a los buscadores a comprender y clasificar el contenido para búsquedas más precisas.'
      }
    }
  ];

  const handleAnswerSelect = (optionId) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionId
    }));
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quizQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      const correctOption = question.options.find(opt => opt.correct);
      if (userAnswer === correctOption.id) {
        correct++;
      }
    });
    return {
      correct,
      total: quizQuestions.length,
      percentage: Math.round((correct / quizQuestions.length) * 100)
    };
  };

  const getCurrentAnswer = () => userAnswers[currentQuestion];
  const getCurrentQuestion = () => quizQuestions[currentQuestion];
  const isAnswered = () => getCurrentAnswer() !== undefined;

  const score = calculateScore();

  if (showResults) {
    return (
      <div className="screen-container">
        <div className="card">
          <h2 className="screen-title">📊 Resultados del Quiz</h2>
          
          <div className="results-summary">
            <div className="score-circle">
              <div className="score-value">{score.percentage}%</div>
              <div className="score-label">Puntuación</div>
            </div>
            
            <div className="score-details">
              <div className="score-item">
                <span className="score-number correct">{score.correct}</span>
                <span className="score-text">Correctas</span>
              </div>
              <div className="score-item">
                <span className="score-number incorrect">{score.total - score.correct}</span>
                <span className="score-text">Incorrectas</span>
              </div>
              <div className="score-item">
                <span className="score-number total">{score.total}</span>
                <span className="score-text">Total</span>
              </div>
            </div>
          </div>

          <div className="results-feedback">
            {score.percentage >= 80 ? (
              <div className="feedback-excellent">
                <h3>🎉 ¡Excelente trabajo!</h3>
                <p>Demuestras un gran entendimiento de los conceptos de metadatos.</p>
              </div>
            ) : score.percentage >= 60 ? (
              <div className="feedback-good">
                <h3>👍 Buen trabajo</h3>
                <p>Tienes una buena base, pero puedes mejorar con un poco más de práctica.</p>
              </div>
            ) : (
              <div className="feedback-improve">
                <h3>📚 Sigue aprendiendo</h3>
                <p>Te recomendamos repasar los conceptos antes de continuar.</p>
              </div>
            )}
          </div>

          <div className="questions-review">
            <h3>Revisión de respuestas:</h3>
            {quizQuestions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const correctOption = question.options.find(opt => opt.correct);
              const isCorrect = userAnswer === correctOption.id;
              
              return (
                <div key={question.id} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="review-question">
                    <strong>Pregunta {index + 1}:</strong> {question.question}
                  </div>
                  <div className="review-answer">
                    <span>Tu respuesta: </span>
                    <strong className={isCorrect ? 'text-correct' : 'text-incorrect'}>
                      {question.options.find(opt => opt.id === userAnswer)?.text}
                    </strong>
                  </div>
                  {!isCorrect && (
                    <div className="review-correct">
                      <span>Respuesta correcta: </span>
                      <strong className="text-correct">{correctOption.text}</strong>
                    </div>
                  )}
                  <div className="review-explanation">
                    {isCorrect ? question.explanation.correct : question.explanation.incorrect}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="navigation-buttons">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setUserAnswers({});
              }}
              className="btn-secondary"
            >
              Reintentar quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = getCurrentQuestion();

  return (
    <div className="screen-container">
      <div className="card">
        <h2 className="screen-title">Actividades interactivas</h2>
        
        <div className="quiz-section">
          <div className="quiz-header">
            <h3 className="quiz-title">
              📝 Quiz de comprensión
            </h3>
            <div className="quiz-progress-container">
              <span className="quiz-progress">
                Pregunta {currentQuestion + 1} de {quizQuestions.length}
              </span>
              <div className="progress-dots">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`progress-dot ${
                      index === currentQuestion 
                        ? 'active' 
                        : userAnswers[index] 
                          ? 'completed' 
                          : ''
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <p className="quiz-question">
            {currentQ.question}
          </p>
          
          <div className="quiz-options">
            {currentQ.options.map(option => (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                className={`quiz-option ${
                  getCurrentAnswer() === option.id 
                    ? (option.correct ? 'option-correct' : 'option-incorrect') 
                    : ''
                }`}
                disabled={getCurrentAnswer() !== undefined}
              >
                <div className="option-content">
                  <span className="option-text">
                    <span className="option-letter">{option.id.toUpperCase()}.</span>
                    {option.text}
                  </span>
                  {getCurrentAnswer() === option.id && (
                    option.correct ? 
                    <CheckCircle className="option-icon correct" /> :
                    <X className="option-icon incorrect" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {getCurrentAnswer() && (
            <div className={`quiz-feedback ${
              currentQ.options.find(opt => opt.id === getCurrentAnswer())?.correct 
                ? 'feedback-correct' 
                : 'feedback-incorrect'
            }`}>
              <p className="feedback-title">
                {currentQ.options.find(opt => opt.id === getCurrentAnswer())?.correct 
                  ? '✓ ¡Correcto!' 
                  : '✗ Incorrecto'
                }
              </p>
              <p className="feedback-text">
                {currentQ.options.find(opt => opt.id === getCurrentAnswer())?.correct 
                  ? currentQ.explanation.correct 
                  : currentQ.explanation.incorrect
                }
              </p>
            </div>
          )}

          <div className="quiz-navigation">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="btn-secondary"
            >
              <ChevronLeft className="button-icon" />
              Anterior
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isAnswered()}
              className="btn-primary"
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Ver resultados' : 'Siguiente'}
              {currentQuestion < quizQuestions.length - 1 && <ChevronRight className="button-icon" />}
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Quiz;