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
          <div className="bg-gradient-to-r from-arsenal-red to-emirates-red p-6 md:p-8">
            {/* Logos and Title on Same Line */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <motion.img
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src="/images/logos/arsenal-logo.png"
                alt="Arsenal FC"
                className="h-16 md:h-20 lg:h-24 object-contain flex-shrink-0"
              />

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white text-center flex-1"
              >
                Find Your Perfect Destination
              </motion.h1>

              <motion.img
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src="/images/logos/emirates-logo.png"
                alt="Emirates"
                className="h-16 md:h-20 lg:h-24 object-contain flex-shrink-0"
              />
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl font-body text-white/90 text-center mb-6"
            >
              Discover your perfect destination and the Arsenal star who agrees
            </motion.p>

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStart}
              className="mx-auto block bg-white text-arsenal-red font-heading text-2xl md:text-3xl py-3 px-12 rounded-lg shadow-2xl hover:bg-gray-100 transition-colors uppercase"
            >
              Start Your Journey
            </motion.button>
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
              className="relative bg-gradient-to-r from-[#C4A574]/20 via-[#D4AF37]/15 to-[#C4A574]/20 p-6 md:p-8 rounded-xl shadow-lg border-2 border-[#C4A574]/30 mb-8 overflow-hidden"
            >
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-center"
                >
                  <h2 className="text-2xl md:text-3xl font-heading text-gray-900 mb-4">
                    COMPLETE THE QUIZ FOR A CHANCE TO WIN
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-md border border-[#C4A574]/20"
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-heading text-arsenal-red text-center leading-tight">
                      ALL-EXPENSES-PAID TRIP TO YOUR MATCHED DESTINATION
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="text-center px-2"
                  >
                    <p className="text-xl md:text-2xl font-heading text-gray-700">OR</p>
                  </motion.div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-md border border-[#C4A574]/20"
                  >
                    <p className="text-lg md:text-xl lg:text-2xl font-heading text-arsenal-red text-center leading-tight">
                      MATCH-WORN SIGNED ARSENAL HOME KIT
                    </p>
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-center text-sm md:text-base font-body text-gray-700 mt-4"
                >
                  Complete and share to enter the prize draw
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
              <h3 className="font-accent font-semibold text-lg mb-3 text-gray-800 text-center">
                What You'll Discover:
              </h3>
              <ul className="space-y-2 text-gray-700 font-body">
                <li className="flex items-center justify-center">
                  <span className="text-arsenal-red mr-2">✓</span>
                  <span>Your perfect travel destination matched by an Arsenal player</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-arsenal-red mr-2">✓</span>
                  <span>Personalized travel insights based on your preferences</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="text-arsenal-red mr-2">✓</span>
                  <span>Exclusive travel recommendations and Emirates flight routes</span>
                </li>
                <li className="flex items-center justify-center">
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
