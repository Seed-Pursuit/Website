import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/logo_seed_pursuit.png';

const Navbar = () => {
  return (
    <nav className="bg-opacity-60 backdrop-blur-md bg-white fixed w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="text-2xl font-heading text-purple">
            <Link to="/">
              <img src={logo} alt='logo' className='w-10' />
            </Link>
          </div>

          <ul className="flex space-x-6 text-gray">
            <li>
              <Link to="/about" className='flex'>About</Link>
            </li>
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/startup">Startup</Link>
            </li>
            <li>
              <Link to="/investors">Investors</Link>
            </li>
            <li>
              <Link to="/find-co-founder">Find co-founder</Link>
            </li>
          </ul>
          <div>
            <div className="px-4">
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
