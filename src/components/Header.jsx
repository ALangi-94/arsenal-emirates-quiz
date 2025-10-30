import { motion } from 'framer-motion';

const Header = ({ compact = false }) => {
  const arsenalSize = compact ? "h-16 md:h-20" : "h-24 md:h-32";
  const emiratesSize = compact ? "h-16 md:h-20" : "h-24 md:h-32";
  const padding = compact ? "p-2 md:p-3" : "p-4 md:p-6";

  return (
    <div className={`w-full flex justify-between items-center ${padding}`}>
      <motion.img
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="/images/logos/arsenal-logo.png"
        alt="Arsenal FC"
        className={`${arsenalSize} object-contain`}
      />

      <motion.img
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="/images/logos/emirates-logo.png"
        alt="Emirates"
        className={`${emiratesSize} object-contain`}
      />
    </div>
  );
};

export default Header;
