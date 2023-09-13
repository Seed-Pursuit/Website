import React from 'react';
import { motion } from 'framer-motion';
import { useAuth0 } from '@auth0/auth0-react';
import image from '../assets/Logo/image.png';
import Frame4 from '../assets/Frame 4.svg';
import Investors from '../assets/Investors.png';
import Individuals from '../assets/Individuals.png';
import Startup from '../assets/Startups.png';
import Orange from '../components/buttons/Orange';
import Red from '../components/buttons/Red';
import DarkBlue from '../components/buttons/DarkBlue';
import Features from '../assets/FeaturesNew.svg';
import TypingText from '../components/design/TypingText';
import Orange2 from '../components/buttons/Orange2';

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
    <div className="bg-classic min-h-screen flex flex-col items-center justify-center">
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

      {/* Typing effect */}
      <div className='py-10' />
      <TypingText />

      <div className="max-w-4xl mx-auto py-1 align-center text-center">
        <img src={image} alt='seed-pursuit' height={300} />
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover="hover"
          onClick={isAuthenticated ? () => alert('You are already logged in.') : loginWithRedirect}
          variants={buttonVariants}
        >

          <div className='w-40'>
            {/* Call to action btn */}
            <Orange text="Join Now" />
          </div>
        </motion.button>
        <div className='py-10'>
          <motion.img
            src={Frame4}
            alt='frame'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </div>

        {/* Features */}
        <div>
          <img src={Features} alt='Features' className='svg-animation' />
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

        {/* Apply as a developer */}
        <div className='px-60 text-align'>
          <Red text="Apply as a developer" link="apply" />
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
