import React from 'react';
import {FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Logo/logo_seed_pursuit.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center  items-center text-center px-6">
        <div className="w-full lg:w-1/4 lg:mb-0 mb-8">
          <img
            className="w-24 h-24 rounded-full border-4 border-green-400 shadow-lg"
            src={Logo}
            alt="Logo"
          />
          <p className='text-lg'>Seed Pursuit</p>
          <p className='text-md'>Empowering startups to flourish</p>
        </div>
        <div className="w-full lg:w-2/4 text-center lg:text-left">
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-6">
            Join our monthly newsletter to get the latest updates on crowdfunding, startup resources, and courses.
          </p>
          <form className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <input
                type="text"
                className="block w-full p-3 rounded border-2 border-gray-700 bg-transparent text-gray-200 focus:outline-none focus:border-green-400 placeholder-gray-400"
                placeholder="Email address"
              />
            </div>
            <div className="md:mb-0">
              <button
                type="submit"
                className="py-3 px-6 bg-red-400 text-white rounded hover:bg-red-500 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/4 text-center lg:text-right mt-8 lg:mt-0">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-green ">
            <li className="mb-2">
              <a
                className="text-white hover:text-green transition"
                href="mailto:info@seedpursuit.com"
              >
                info@seedpursuit.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Social media icons */}
      <div className="mt-8 text-center">
        <div className="mb-6 flex justify-center space-x-4">
          <a
            href="/"
            className="text-white hover:text-green-400 transform hover:rotate-45 transition-transform"
          >
            <FaFacebook className="h-9 w-9 rounded-full border-2 border-white p-1" />
          </a>
          <a
            href="/"
            className="text-white hover:text-green-400 transform hover:rotate-45 transition-transform"
          >
            <FaTwitter className="h-9 w-9 rounded-full border-2 border-white p-1" />
          </a>
          <a
            href="/"
            className="text-white hover:text-green-400 transform hover:rotate-45 transition-transform"
          >
            <FaInstagram className="h-9 w-9 rounded-full border-2 border-white p-1" />
          </a>
          <a
            href="/"
            className="text-white hover:text-green-400 transform hover:rotate-45 transition-transform"
          >
            <FaLinkedin className="h-9 w-9 rounded-full border-2 border-white p-1" />
          </a>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Seed Pursuit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
