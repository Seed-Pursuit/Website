import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="bg-soft min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg p-6 shadow-md">
          {/* User Profile */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-heading text-black">Welcome, {user.name}</h2>
              <p className="text-gray">Email: {user.email}</p>
            </div>
            <div>
              <img
                src={user.picture}
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red text-white py-2 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red float-right"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
 