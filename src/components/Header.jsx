import { motion } from 'framer-motion';

const Header = ({ variant = 'default' }) => {
  return (
    <div className="w-full flex justify-between items-center p-4 md:p-6">
      <motion.img
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="/images/logos/arsenal-logo.png"
        alt="Arsenal FC"
        className="h-12 md:h-16 object-contain"
      />

      <motion.img
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src="/images/logos/emirates-logo.png"
        alt="Emirates"
        className="h-8 md:h-12 object-contain"
      />
    </div>
  );
};

export default Header;
