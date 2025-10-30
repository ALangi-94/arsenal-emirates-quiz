import { motion } from 'framer-motion';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import Header from './Header';

const QuizQuestion = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col p-4"
    >
      <Header />

      <div className="max-w-3xl w-full mx-auto flex-1 flex flex-col justify-center">
        <ProgressBar current={currentQuestion} total={totalQuestions} />

        <motion.div
          key={question.id}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          {/* Question */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-heading text-gray-900 mb-8"
          >
            {question.question}
          </motion.h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(option)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all font-body ${
                  selectedOption?.value === option.value
                    ? 'border-arsenal-red bg-arsenal-red text-white shadow-lg'
                    : 'border-gray-200 bg-white hover:border-arsenal-red/50 hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">{option.text}</span>
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
      </div>
    </motion.div>
  );
};

export default QuizQuestion;
