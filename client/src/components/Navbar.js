import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/logo_seed_pursuit.png';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isPursuitCoinDropdownOpen, setIsPursuitCoinDropdownOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (isDropdownOpen === dropdown) {
      setIsDropdownOpen(null);
    } else {
      setIsDropdownOpen(dropdown);
    }
  };

  const togglePursuitCoinDropdown = () => {
    setIsPursuitCoinDropdownOpen(!isPursuitCoinDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(null);
    setIsPursuitCoinDropdownOpen(false);
  };

  return (
    <nav className="bg-opacity-60 backdrop-blur-md bg-white fixed w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="text-2xl font-heading text-purple flex">
            <Link to="/">
              <img src={logo} alt="logo" className="w-10" />
            </Link>
          </div>

          <ul className="flex space-x-6 text-gray">
            <li>
              <Link to="/about" className="flex" onMouseEnter={closeDropdowns}>
                About
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => toggleDropdown('howItWorks')}
              onMouseLeave={closeDropdowns}
            >
              <Link to="/how-it-works">
                How it works{' '}
                <FaCaretDown className="inline" />
              </Link>
              {isDropdownOpen === 'howItWorks' && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                  <ul className="py-2 space-y-2">
                    <li>
                      <Link to="/features">Features</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/testimonials">Testimonials</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => toggleDropdown('startup')}
              onMouseLeave={closeDropdowns}
            >
              <Link to="/startup">
                Startup{' '}
                <FaCaretDown className="inline" />
              </Link>
              {isDropdownOpen === 'startup' && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                  <ul className="py-2 space-y-2">
                    <li>
                      <Link to="/resources">Resources</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to="/investors" onMouseEnter={closeDropdowns}>
                Investors
              </Link>
            </li>
            <li>
              <Link
                to="/find-co-founder"
                onMouseEnter={closeDropdowns}
              >
                Find co-founder
              </Link>
            </li>
            <li
              className="relative"
              onClick={() => toggleDropdown('pursuitCoin')}
            >
              PursuitCoin Grants{' '}
              <FaCaretDown className="inline" />
              {isDropdownOpen === 'pursuitCoin' && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                  <ul className="py-2 space-y-2">
                    <li>
                      <Link to="/grants">View Grants</Link>
                    </li>
                    <li>
                      <Link to="/apply-grant">Apply for a Grant</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <div>
            <div className="px-4"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
