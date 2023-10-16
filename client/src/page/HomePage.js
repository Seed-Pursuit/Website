import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import image from '../assets/Logo/image.png';
import { Link } from 'react-router-dom';

const Card = ({ title, icon, variants, to }) => {
  return (
    <Link to={to}>
      <motion.div
        className="bg-greenish-black text-white p-4 rounded-lg text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red cursor-pointer"
        variants={variants}
        whileHover="hover"
      >
        <span role="img" aria-label="">
          {icon}
        </span>
        &nbsp;{title}
      </motion.div>
    </Link>
  );
};

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
              <img src={user.picture} alt="Profile" className="w-16 h-16 rounded-full" />
            </div>
          </div>

          {/* Card Components with Hover Effects */}
          <div className="grid grid-cols-2 gap-8">
            <Card
              title="Investment Portfolio"
              icon="🤑"
              variants={buttonVariants}
              to="/invest"
            />

            <Card
              title="Startup Portfolio"
              icon="🚀"
              variants={buttonVariants}
              to="/start-up"
            />

            <Card
              title="My Portfolio"
              icon="📈"
              variants={buttonVariants}
              to="/my-portfolio"
            />

            <Card
              title="Find a Co-founder"
              icon="🤝"
              variants={buttonVariants}
              to="/find-co-founder"
            />
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
            className="bg-red text-white py-2 px-4 rounded-full text-lg hover-bg-red-dark focus:outline-none focus:ring-2 focus:ring-red float-right mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
