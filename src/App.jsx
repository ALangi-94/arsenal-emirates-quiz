import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import QuizQuestion from './components/QuizQuestion';
import SubscribeGate from './components/SubscribeGate';
import ResultsScreen from './components/ResultsScreen';
import { questions } from './data/questions';
import { calculateResult } from './utils/calculateResult';

function App() {
  const [screen, setScreen] = useState('intro'); // intro, quiz, subscribe, results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleStart = () => {
    setScreen('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    // Move to next question or show subscribe gate
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, show subscribe gate
      setScreen('subscribe');
    }
  };

  const handleSubscribe = (formData) => {
    setUserData(formData);

    // Calculate result
    const result = calculateResult(answers);
    setQuizResult(result);

    // Show results
    setScreen('results');

    // Here you would typically send data to your backend
    console.log('User Data:', formData);
    console.log('Quiz Answers:', answers);
    console.log('Result:', result);
  };

  const handleRestart = () => {
    setScreen('intro');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizResult(null);
    setUserData(null);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {screen === 'intro' && (
          <IntroScreen key="intro" onStart={handleStart} />
        )}

        {screen === 'quiz' && (
          <QuizQuestion
            key={`question-${currentQuestionIndex}`}
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        )}

        {screen === 'subscribe' && (
          <SubscribeGate key="subscribe" onSubmit={handleSubscribe} />
        )}

        {screen === 'results' && quizResult && (
          <ResultsScreen
            key="results"
            result={quizResult}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
