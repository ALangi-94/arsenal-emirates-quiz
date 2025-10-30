import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';

const IntroScreen = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header with logos */}
        <div className="bg-gradient-to-r from-arsenal-red to-emirates-red p-8">
          <div className="flex justify-between items-center mb-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white text-2xl font-bebas tracking-wider"
            >
              ARSENAL FC
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <FaPlane className="text-white text-4xl" />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white text-2xl font-bebas tracking-wider"
            >
              EMIRATES
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-5xl md:text-7xl font-bebas text-white text-center mb-4"
          >
            Find Your Perfect Destination
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl font-inter text-white/90 text-center"
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
                <div className="text-4xl font-bebas text-arsenal-red mb-2">15</div>
                <div className="text-sm font-inter text-gray-600">Questions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bebas text-arsenal-red mb-2">8</div>
                <div className="text-sm font-inter text-gray-600">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bebas text-arsenal-red mb-2">5</div>
                <div className="text-sm font-inter text-gray-600">Minutes</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-montserrat font-semibold text-lg mb-3 text-gray-800">
                What You'll Discover:
              </h3>
              <ul className="space-y-2 text-gray-700 font-inter">
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
              className="w-full bg-arsenal-red text-white font-bebas text-3xl py-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
            >
              Start Your Journey
            </motion.button>

            <p className="text-center text-sm text-gray-500 font-inter">
              Takes about 5 minutes • Your data is protected
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroScreen;
