import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-body text-white/80">
          Question {current} of {total}
        </span>
        <span className="text-sm font-heading text-white text-lg">
          {Math.round(percentage)}%
        </span>
      </div>

      <div className="relative h-3 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-arsenal-red to-emirates-gold"
        />

        {/* Animated Emirates plane */}
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${percentage}%` }}
        >
          <div className="bg-white rounded-full p-1 shadow-lg w-8 h-8 flex items-center justify-center">
            <img
              src="/images/emirates-plane.png"
              alt="Emirates"
              className="w-6 h-6 object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Section indicator */}
      <div className="mt-2 text-center">
        <span className="text-xs font-body text-white/60">
          {current <= 5 && "Travel Personality"}
          {current > 5 && current <= 10 && "Lifestyle & Preferences"}
          {current > 10 && "Deeper Psychographics"}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
