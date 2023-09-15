import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import image from '../assets/Logo/image.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-soft min-h-screen py-20">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          {/* User Profile */}
          <img src={image} alt="seed-pursuit" height={300} />

          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-4xl font-subheading text-black flex">
                <div className="text-red">Welcome</div>, {user.name}
              </h2>
              <p className="text-gray font-normal">{user.email}</p>
            </div>
            <div>
              <img
                src={user.picture}
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="">
            <div className="flex space-x-8 p-4">
              <Link to="/invest">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-greenish-black text-white py-4 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red"
                >
                  <span role="img" aria-label="">
                    🤑
                  </span>
                  &nbsp;Investment Portfolio
                </motion.button>
              </Link>

              <Link to="/start-up">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-greenish-black text-white py-4 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red"
                >
                  <span role="img" aria-label="">
                    🚀
                  </span>
                  &nbsp;Startup Portfolio
                </motion.button>
              </Link>
            </div>

            <div className="flex space-x-8 p-4">
              <Link to="/my-portfolio">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-greenish-black text-white py-4 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red"
                >
                  <span role="img" aria-label="">
                    📈
                  </span>
                  &nbsp;My Portfolio
                </motion.button>
              </Link>

              <Link to="/find-co-founder">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-greenish-black text-white py-4 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red"
                >
                  <span role="img" aria-label="">
                    🤝
                  </span>
                  &nbsp;Find a Co-founder
                </motion.button>
              </Link>

            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-8">
            <h3 className="text-2xl font-subheading text-black mb-4">
              Explore Seed Pursuit
            </h3>
            <p className="text-gray font-normal">
              Seed Pursuit is your one-stop platform for investment and
              entrepreneurship. Whether you are an investor looking for
              opportunities, a startup founder seeking funding, or someone
              looking to build your portfolio, we've got you covered.
            </p>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red text-white py-2 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red float-right mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
