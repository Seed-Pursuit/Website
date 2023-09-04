import React from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import image from '../assets/Logo/image.png';
import Frame4 from '../assets/Frame 4.svg';
import Features from '../assets/Features.svg';
import Investors from '../assets/Investors.png';
import Individuals from '../assets/Individuals.png';
import Startup from '../assets/Startups.png';
import btn from '../assets/Buttons/apply_as_developer.svg';

const Landing = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <div className="bg-soft min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover="hover"
          onClick={isAuthenticated ? () => alert('You are already logged in.') : loginWithRedirect}
          className={`${isAuthenticated ? 'bg-green' : 'bg-black'
            } text-red py-2 px-4 rounded-full text-lg hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green`}
          variants={buttonVariants}
        >
          {isAuthenticated ? 'Logged In' : 'Join Now'}
        </motion.button>
      </div>

      <div className="max-w-4xl mx-auto py-20 text-center">
        <img src={image} alt='seed-pursuit' height={300} />

        <div className='py-10'>
          <motion.img
            src={Frame4}
            alt='frame'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        <div className='py-10'>
          <motion.img
            src={Features}
            alt='frame'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        <div className='py-10'>
          <motion.img
            src={Investors}
            alt='frame'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        <div className='py-10'>
          <motion.img
            src={Startup}
            alt='frame'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        <div className='py-10'>
          <motion.img
            src={Individuals}
            alt='frame'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        <div className='py-10'>
          <motion.img
            src={btn}
            alt='frame'
            className="hover-3d-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)", transform: "translateY(-5px)" }} // 3D effect on hover
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
