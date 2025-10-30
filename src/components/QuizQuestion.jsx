import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import Header from './Header';

const QuizQuestion = ({ question, questionIndex, onAnswer, currentQuestion, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    // Delay to show selection before moving to next question
    setTimeout(() => {
      onAnswer(option);
      setSelectedOption(null);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col p-2 md:p-4">
      <div className="w-full">
        <Header compact />
      </div>

      <div className="max-w-3xl w-full mx-auto mt-4">
        <ProgressBar current={currentQuestion} total={totalQuestions} />

        <AnimatePresence mode="wait">
          <motion.div
            key={questionIndex}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl p-4 md:p-6 overflow-y-auto"
            style={{ minHeight: '400px', maxHeight: 'calc(100vh - 280px)' }}
          >
          {/* Question */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-heading text-gray-900 mb-3 md:mb-4"
          >
            {question.question}
          </motion.h2>

          {/* Options */}
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.01, x: 2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleSelect(option)}
                className={`w-full text-left p-3 md:p-4 rounded-lg border-2 transition-all font-body ${
                  selectedOption?.value === option.value
                    ? 'border-arsenal-red bg-arsenal-red text-white shadow-lg'
                    : 'border-gray-200 bg-white hover:border-arsenal-red/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base">{option.text}</span>
                  <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedOption?.value === option.value
                      ? 'border-white bg-white'
                      : 'border-gray-300'
                  }`}>
                    {selectedOption?.value === option.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 rounded-full bg-arsenal-red"
                      />
                    )}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizQuestion;
