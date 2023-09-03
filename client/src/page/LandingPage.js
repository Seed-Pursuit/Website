import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className="bg-soft min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-8">
        {/* <img src='' alt='logo'/> */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="bg-green text-white py-2 px-4 rounded-full text-lg hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green"
        >
          Join Now
        </motion.button>
      </div>
    </div>
  );
};

export default Landing;
