import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaUser, FaLinkedin } from 'react-icons/fa';

const SubscribeGate = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    linkedin: '',
    emailConsent: false,
    termsConsent: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.termsConsent) {
      newErrors.termsConsent = 'You must agree to terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
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

            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-3">
              Your Perfect Destination Awaits...
            </h2>
            <p className="text-lg font-inter text-white/90">
              Subscribe to discover which Arsenal star shares your travel DNA and unlock your personalized destination guide
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <div className="p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                Email Address <span className="text-arsenal-red">*</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-arsenal-red/50 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 font-inter">{errors.email}</p>
              )}
            </div>

            {/* Name fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  First Name <span className="text-arsenal-red">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-arsenal-red/50 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                </div>
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500 font-inter">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-arsenal-red/50"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* LinkedIn (optional) */}
            <div>
              <label className="block text-sm font-inter font-medium text-gray-700 mb-2">
                LinkedIn Profile (optional)
              </label>
              <div className="relative">
                <FaLinkedin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-arsenal-red/50"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="emailConsent"
                  checked={formData.emailConsent}
                  onChange={handleChange}
                  className="mt-1 mr-3 w-5 h-5 text-arsenal-red border-gray-300 rounded focus:ring-arsenal-red"
                />
                <span className="text-sm font-inter text-gray-700">
                  Yes, send me travel inspiration and Arsenal content
                </span>
              </label>

              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="termsConsent"
                  checked={formData.termsConsent}
                  onChange={handleChange}
                  className="mt-1 mr-3 w-5 h-5 text-arsenal-red border-gray-300 rounded focus:ring-arsenal-red"
                />
                <span className="text-sm font-inter text-gray-700">
                  I agree to T&Cs and privacy policy <span className="text-arsenal-red">*</span>
                </span>
              </label>
              {errors.termsConsent && (
                <p className="text-sm text-red-500 font-inter">{errors.termsConsent}</p>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-arsenal-red text-white font-bebas text-3xl py-4 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
            >
              Reveal My Destination
            </motion.button>

            <p className="text-center text-xs text-gray-500 font-inter">
              Your information is secure and will never be shared with third parties
            </p>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SubscribeGate;
