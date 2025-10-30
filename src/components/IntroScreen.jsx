import { motion } from 'framer-motion';
import Header from './Header';

const IntroScreen = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header with logos */}
        <div className="bg-gradient-to-r from-arsenal-red to-emirates-red p-8">
          <Header />

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-heading text-white text-center mb-4"
          >
            Find Your Perfect Destination
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl font-body text-white/90 text-center"
          >
            Discover where your next adventure awaits, as matched by Arsenal stars
          </motion.p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-heading text-arsenal-red mb-2">15</div>
                <div className="text-sm font-body text-gray-600">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-arsenal-red mb-2">8</div>
                <div className="text-sm font-body text-gray-600">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading text-arsenal-red mb-2">5</div>
                <div className="text-sm font-body text-gray-600">Minutes</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-accent font-semibold text-lg mb-3 text-gray-800">
                What You'll Discover:
              </h3>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-start">
                  <span className="text-arsenal-red mr-2">✓</span>
                  <span>Your perfect travel destination matched by an Arsenal player</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arsenal-red mr-2">✓</span>
                  <span>Personalized travel insights based on your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arsenal-red mr-2">✓</span>
                  <span>Exclusive travel recommendations and Emirates flight routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-arsenal-red mr-2">✓</span>
                  <span>Enter to win an all-expenses-paid trip</span>
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStart}
              className="w-full bg-arsenal-red text-white font-heading text-3xl py-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors uppercase"
            >
              Start Your Journey
            </motion.button>

            <p className="text-center text-sm text-gray-500 font-body">
              Takes about 5 minutes • Your data is protected
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
