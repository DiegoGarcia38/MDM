import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Help from './components/pages/Help';
import Concept from './components/pages/Concept';
import Structure from './components/pages/Structure';
import Standards from './components/pages/Standards';
import Applications from './components/pages/Applications';
import Quiz from './components/quiz/QuizQuestion';
import Evaluation from './components/quiz/QuizFeedback';
import './styles/globals.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [userProgress, setUserProgress] = useState(0);

  const screens = {
    home: 'Inicio',
    about: 'Información del curso',
    concept: '¿Qué son los metadatos?',
    structure: 'Estructura y tipos',
    standards: 'Estándares',
    applications: 'Aplicaciones prácticas',
    quiz: 'Actividades interactivas',
    evaluation: 'Evaluación final',
    help: 'Ayuda'
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <Home setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
      case 'about': return <About setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
      case 'help': return <Help setCurrentScreen={setCurrentScreen} />;
      case 'concept': return <Concept setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
      case 'structure': return <Structure setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
      case 'standards': return <Standards setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
      case 'applications': return <Applications setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
      case 'quiz': return <Quiz setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
      case 'evaluation': return <Evaluation setCurrentScreen={setCurrentScreen} />;
      default: return <Home setCurrentScreen={setCurrentScreen} setUserProgress={setUserProgress} />;
    }
  };

  return (
    <div className="app">
      {currentScreen !== 'home' && currentScreen !== 'evaluation' && (
        <Header 
          currentScreen={currentScreen} 
          userProgress={userProgress} 
          screens={screens}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      <main>
        {renderScreen()}
      </main>
      {currentScreen !== 'home' && currentScreen !== 'evaluation' && currentScreen !== 'help' && (
        <Footer />
      )}
    </div>
  );
};

export default App;