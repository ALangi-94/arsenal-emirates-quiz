import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaLinkedin, FaShareAlt, FaTrophy, FaMapMarkerAlt, FaCalendarAlt, FaPlane } from 'react-icons/fa';
import { useState } from 'react';
import Header from './Header';

const ResultsScreen = ({ result, onRestart }) => {
  const [shareClicked, setShareClicked] = useState(false);
  const destination = result.bestMatch.destination;
  const matchPercentage = result.bestMatch.matchPercentage;

  const handleShare = async (platform) => {
    const shareText = `I got ${destination.name} matched with ${destination.player.name}! ${matchPercentage}% match. Find your perfect destination with Arsenal x Emirates.`;
    const shareUrl = window.location.href;

    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({
          title: 'Arsenal x Emirates Destination Quiz',
          text: shareText,
          url: shareUrl
        });
        setShareClicked(true);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      let url = '';
      switch (platform) {
        case 'twitter':
          url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
          break;
        case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
          break;
        case 'linkedin':
          url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
          break;
      }
      if (url) {
        window.open(url, '_blank', 'width=600,height=400');
        setShareClicked(true);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-2 px-2 md:py-6 md:px-4 pb-6"
    >
      <Header compact />

      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden mb-4 md:mb-8"
        >
          {/* Header with player and destination */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            {/* Destination Image Background */}
            <img
              src={destination.hero.image}
              alt={destination.hero.alt}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-arsenal-navy/70 to-arsenal-red/70 z-10" />

            {/* Decorative elements */}
            <div className="absolute inset-0 z-15">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-emirates-gold/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-20 h-full flex flex-col items-center justify-center text-white p-4 md:p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="mb-3 md:mb-4"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 md:px-6 md:py-2">
                  <span className="font-heading text-lg md:text-2xl">{matchPercentage}% Match</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl lg:text-7xl font-heading text-center mb-1 md:mb-2 px-2"
              >
                {destination.name}
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-base md:text-xl lg:text-2xl font-body text-center mb-4 md:mb-6"
              >
                {destination.country}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-3"
              >
                <p className="font-accent text-xs md:text-sm mb-1">Matched with</p>
                <p className="font-heading text-xl md:text-3xl">{destination.player.name}</p>
                {destination.player.number && (
                  <p className="font-body text-xs md:text-sm">#{destination.player.number} • {destination.player.position}</p>
                )}
              </motion.div>
            </div>
          </div>

          {/* Player Quote */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="p-4 md:p-8 bg-gradient-to-r from-gray-50 to-white border-l-4 border-arsenal-red"
          >
            <p className="text-base md:text-xl lg:text-2xl font-body italic text-gray-800">
              "{destination.player.quote}"
            </p>
            <p className="mt-2 font-accent font-semibold text-arsenal-red text-sm md:text-base">
              - {destination.player.name}
            </p>
          </motion.div>
        </motion.div>

        {/* Personality Summary */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="bg-white rounded-2xl shadow-lg p-4 md:p-8 mb-4 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading text-gray-900 mb-3 md:mb-4 flex items-center">
            <FaTrophy className="mr-2 md:mr-3 text-emirates-gold text-lg md:text-xl" />
            Your Travel Persona
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-accent font-semibold text-arsenal-red mb-2 md:mb-3">
            {destination.player.persona}
          </p>
          <p className="text-sm md:text-base lg:text-lg font-body text-gray-700 leading-relaxed">
            {destination.personality}
          </p>
        </motion.div>

        {/* Destination Highlights */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-2xl shadow-lg p-4 md:p-8 mb-4 md:mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading text-gray-900 mb-4 md:mb-6">
            What To Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-8">
            <div>
              <h3 className="font-accent font-semibold text-base md:text-lg mb-2 md:mb-3 flex items-center text-gray-800">
                <FaMapMarkerAlt className="mr-2 text-arsenal-red text-sm md:text-base" />
                Top Highlights
              </h3>
              <ul className="space-y-1.5 md:space-y-2">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start font-body text-gray-700 text-sm md:text-base">
                    <span className="text-arsenal-red mr-2 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-4 md:mb-6">
                <h3 className="font-accent font-semibold text-base md:text-lg mb-2 flex items-center text-gray-800">
                  <FaCalendarAlt className="mr-2 text-arsenal-red text-sm md:text-base" />
                  Best Time to Visit
                </h3>
                <p className="font-body text-gray-700 text-sm md:text-base">{destination.bestTime}</p>
              </div>

              <div>
                <h3 className="font-accent font-semibold text-base md:text-lg mb-2 flex items-center text-gray-800">
                  <FaPlane className="mr-2 text-emirates-red text-sm md:text-base" />
                  Emirates Route
                </h3>
                <p className="font-body text-gray-700 text-sm md:text-base">{destination.emiratesRoute}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emirates-red/10 to-arsenal-red/10 rounded-lg p-3 md:p-6">
            <p className="font-body text-xs md:text-sm text-gray-700">
              <span className="font-semibold">✈️ Special Offer:</span> Book your {destination.name} adventure with Emirates and earn bonus Skywards miles. Experience world-class service all the way to your destination.
            </p>
          </div>
        </motion.div>

        {/* Reward & Share Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="bg-gradient-to-r from-arsenal-red to-emirates-red rounded-2xl shadow-lg p-4 md:p-8 mb-4 md:mb-8 text-white"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading mb-3 md:mb-4">You've Unlocked a Reward!</h2>
          <p className="text-base md:text-lg lg:text-xl font-body mb-4 md:mb-6">
            🎁 <strong>500 Emirates Skywards Miles</strong> added to your profile
          </p>
          <p className="font-body mb-4 md:mb-6 text-sm md:text-base">
            Share your result on social media to enter the draw for an all-expenses-paid trip to {destination.name} and a chance to win one of 10 signed Arsenal home shirts!
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {navigator.share && (
              <button
                onClick={() => handleShare('native')}
                className="flex items-center bg-white text-arsenal-red px-4 py-2 md:px-6 md:py-3 rounded-lg font-accent font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              >
                <FaShareAlt className="mr-1.5 md:mr-2 text-sm md:text-base" />
                Share
              </button>
            )}
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center bg-white text-[#1DA1F2] px-4 py-2 md:px-6 md:py-3 rounded-lg font-accent font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              <FaTwitter className="mr-1.5 md:mr-2 text-sm md:text-base" />
              Twitter
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center bg-white text-[#4267B2] px-4 py-2 md:px-6 md:py-3 rounded-lg font-accent font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              <FaFacebook className="mr-1.5 md:mr-2 text-sm md:text-base" />
              Facebook
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="flex items-center bg-white text-[#0077B5] px-4 py-2 md:px-6 md:py-3 rounded-lg font-accent font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              <FaLinkedin className="mr-1.5 md:mr-2 text-sm md:text-base" />
              LinkedIn
            </button>
          </div>

          {shareClicked && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-body text-sm"
            >
              ✓ Thanks for sharing! You're entered into the draw.
            </motion.p>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="bg-white rounded-2xl shadow-lg p-4 md:p-8 text-center"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-heading text-gray-900 mb-4 md:mb-6">
            Ready for Your Next Adventure?
          </h2>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            <a
              href="https://www.emirates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emirates-red text-white px-4 py-3 md:px-8 md:py-4 rounded-lg font-heading text-base md:text-xl lg:text-2xl hover:bg-red-700 transition-colors"
            >
              Book with Emirates
            </a>
            <button
              onClick={onRestart}
              className="bg-gray-200 text-gray-800 px-4 py-3 md:px-8 md:py-4 rounded-lg font-heading text-base md:text-xl lg:text-2xl hover:bg-gray-300 transition-colors"
            >
              Take Quiz Again
            </button>
          </div>

          <p className="font-body text-xs md:text-sm text-gray-600">
            Follow Arsenal x Emirates for more exclusive activations and travel experiences
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsScreen;
