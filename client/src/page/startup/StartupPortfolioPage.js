import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';

const StartupPortfolioHomePage = () => {
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

          {/* Startup Portfolio Content */}
          <div className="mt-8">
            <h3 className="text-2xl font-subheading text-black mb-4">
              Your Startup Portfolio
            </h3>

            {/* Sample Startup Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {/* Sample Startup Card */}
              <div className="bg-light-blue p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-normal text-black mb-2">
                  Startup Name 1
                </h4>
                <p className="text-gray font-normal">
                  Description of the startup project.
                </p>
              </div>

              {/* Sample Startup Card */}
              <div className="bg-light-blue p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-normal text-black mb-2">
                  Startup Name 2
                </h4>
                <p className="text-gray font-normal">
                  Description of the startup project.
                </p>
              </div>

              {/* Sample Startup Card */}
              <div className="bg-light-blue p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-normal text-black mb-2">
                  Startup Name 3
                </h4>
                <p className="text-gray font-normal">
                  Description of the startup project.
                </p>
              </div>
            </div>

            {/* Add New Startup Button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="bg-greenish-black text-white py-4 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red mt-8"
            >
              Add New Startup
            </motion.button>
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

export default StartupPortfolioHomePage;
