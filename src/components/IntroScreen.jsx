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
        {/* Header with hero image and logos */}
        <div className="relative">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-64 md:h-80 overflow-hidden"
          >
            <img
              src="/images/hero-intro.jpg"
              alt="Arsenal x Emirates"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
          </motion.div>

          {/* Logos and Text Section */}
          <div className="bg-gradient-to-r from-arsenal-red to-emirates-red p-8">
            <Header />

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-heading text-white text-center mb-4 mt-4"
            >
              Find Your Perfect Destination
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl font-body text-white/90 text-center"
            >
              Discover your perfect destination and the Arsenal star who agrees
            </motion.p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6"
          >
            {/* Prize Banner */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="relative bg-gradient-to-r from-emirates-gold via-yellow-400 to-emirates-gold p-6 md:p-8 rounded-2xl shadow-2xl border-4 border-yellow-300 mb-8 overflow-hidden"
            >
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    rotate: [360, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center mb-4"
                >
                  <div className="text-5xl md:text-6xl mb-2">🏆</div>
                  <h2 className="text-3xl md:text-4xl font-heading text-gray-900 mb-2">
                    WIN BIG!
                  </h2>
                </motion.div>

                <div className="space-y-3 text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <p className="text-xl md:text-2xl font-heading text-arsenal-red mb-1">
                      ✈️ ALL-EXPENSES-PAID TRIP
                    </p>
                    <p className="text-base md:text-lg font-body text-gray-800">
                      To your dream destination!
                    </p>
                  </div>

                  <div className="text-2xl font-heading text-gray-900">OR</div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <p className="text-xl md:text-2xl font-heading text-arsenal-red mb-1">
                      👕 SIGNED ARSENAL HOME KIT
                    </p>
                    <p className="text-base md:text-lg font-body text-gray-800">
                      Match-worn and signed by the squad!
                    </p>
                  </div>
                </div>

                <motion.p
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-center text-sm md:text-base font-body font-bold text-gray-900 mt-4"
                >
                  🎁 Complete the quiz to enter the draw! 🎁
                </motion.p>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6"
            >
              <p className="text-sm md:text-base font-body text-gray-800 text-center">
                <span className="font-bold text-yellow-800">⚠️ IMPORTANT:</span> This is a technical demo only and has no official capacity with Arsenal FC or Emirates.
              </p>
            </motion.div>

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
                  <span>500 bonus Emirates Skywards miles added to your profile</span>
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
