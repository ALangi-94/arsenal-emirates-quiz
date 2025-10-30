import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from './Header';

const SubscribeGate = ({ onSubmit }) => {
  const [hasSubscribed, setHasSubscribed] = useState(false);
  const SUBSTACK_URL = 'https://thesportsstack.substack.com';

  useEffect(() => {
    // Listen for form submissions from the Substack iframe
    const handleMessage = (event) => {
      // Check if message is from Substack indicating successful subscription
      if (event.data && typeof event.data === 'string') {
        if (event.data.includes('subscribe') || event.data.includes('success')) {
          setHasSubscribed(true);
          // Proceed to results after a brief delay
          setTimeout(() => {
            onSubmit({ email: 'subscribed@substack.com' }); // Dummy data since we don't capture it
          }, 1500);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onSubmit]);

  const handleSkip = () => {
    // Allow users to skip if they're already subscribed
    onSubmit({ email: 'skipped@example.com' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col p-2 md:p-4"
    >
      <Header compact />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto my-auto"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-arsenal-red to-emirates-red p-8 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-white/20 rounded-full p-4">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-5xl"
                >
                  ✈️
                </motion.div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading text-white mb-3">
              Your Perfect Destination Awaits...
            </h2>
            <p className="text-lg font-body text-white/90">
              Subscribe to The Sports Stack to discover which Arsenal star shares your travel DNA and unlock your personalized destination guide
            </p>
          </motion.div>
        </div>

        {/* Substack Embed Form */}
        <div className="p-8 md:p-10">
          {hasSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-6xl mb-4">✓</div>
              <h3 className="text-2xl font-heading text-gray-900 mb-2">
                Thank You for Subscribing!
              </h3>
              <p className="font-body text-gray-700">
                Revealing your destination results...
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <iframe
                  src="https://thesportsstack.substack.com/embed"
                  width="100%"
                  height="320"
                  style={{ border: '1px solid #EEE', background: 'white', borderRadius: '8px' }}
                  frameBorder="0"
                  scrolling="no"
                />
              </div>

              <div className="text-center">
                <p className="text-sm font-body text-gray-600 mb-4">
                  Already subscribed?
                </p>
                <button
                  onClick={handleSkip}
                  className="text-arsenal-red font-accent font-semibold underline hover:text-red-700 transition-colors"
                >
                  Skip to Results →
                </button>
              </div>

              <p className="text-center text-xs text-gray-500 font-body">
                You'll be subscribed to The Sports Stack newsletter • Your information is secure
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SubscribeGate;
