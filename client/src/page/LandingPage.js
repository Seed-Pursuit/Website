import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/Logo/image.png';
import { useAuth0 } from '@auth0/auth0-react';
import Frame4 from '../assets/Frame 4.svg';
import Features from '../assets/Features.svg';

const Landing = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="bg-soft min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        {isAuthenticated ? (
          <button
            onClick={() => alert('You are already logged in.')}
            className="bg-green text-white py-2 px-4 rounded-full text-lg hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green"
          >
            Logged In
          </button>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="bg-black text-red py-2 px-4 rounded-full text-lg hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green"
          >
            Log In / Sign Up
          </button>
        )}
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto py-20">
        <img src={image} alt='seed-pursuit' height={300} />
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.1, x: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={isAuthenticated ? () => alert('You are already logged in.') : loginWithRedirect}
          className={`${isAuthenticated ? 'bg-green' : 'bg-black'
            } text-red py-2 px-4 rounded-full text-lg hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-green`}
        >
          {isAuthenticated ? 'Logged In' : 'Join Now'}
        </motion.button>

        {/* <div className="font-subheading text-bold text-center mt-6 text-xl text-black">
          Seed Pursuit is more than just a crowdfunding platform – it's a thriving ecosystem designed to propel startups towards <span className="text-green">success</span>. We understand the challenges faced by budding <span className="text-green">entrepreneurs</span> in securing funding and establishing valuable connections. That's why we've developed a <span className="text-green">revolutionary platform</span> that harnesses the power of blockchain technology and gamification to redefine the way startups, co-founders, and <span className="text-green">investors</span> interact.
        </div> */}
        <div className='py-10'>
          <img src={Frame4} alt='frame'/>
        </div>
        <div className='py-10'>
          <img src={Features} alt='frame'/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
