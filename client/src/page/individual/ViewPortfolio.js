import React, { useState, useEffect } from 'react';
import app from '../../db/Firebase';
import { get, ref, getDatabase } from 'firebase/database';
import { useAuth0 } from '@auth0/auth0-react';

const ViewPortfolio = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const { user } = useAuth0();
  const db = getDatabase(app);
  const userId = user.sub;
  const userRef = ref(db, 'users/' + userId);

  useEffect(() => {
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setPortfolioData(snapshot.val());
        } else {
          console.log('No data available for the user.');
        }
      })
      .catch((error) => {
        console.error('Error getting data:', error);
      });
  }, [userRef]);

  if (portfolioData) {
    // Render the data in a nice format.
    return (
      <div className="p-40 m-auto space-y-4">
        <h2 className="text-2xl font-bold text-yellow-300">View Portfolio</h2>
        {/* Display the portfolio data in a presentable way */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300">Personal Details</h3>
          <p>
            <strong>First Name:</strong> {portfolioData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {portfolioData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {portfolioData.email}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-300">Shared Links and Reasons for Joining</h3>
          <p>
            <strong>LinkedIn Profile:</strong>{' '}
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">
              {portfolioData.linkedin}
            </a>
          </p>
          <p>
            <strong>GitHub Profile:</strong>{' '}
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">
              {portfolioData.github}
            </a>
          </p>
          {portfolioData.otherLinks && portfolioData.otherLinks.length > 0 && (
            <div>
              <strong>Other Links:</strong>
              <ul>
                {portfolioData.otherLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-300">Acknowledgment</h3>
          <p>
            <strong>Terms Agreed:</strong> {portfolioData.termsAgreed ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-40 m-auto text-yellow-500 text-2xl font-bold">Loading portfolio data...</div>
    );
  }
};

export default ViewPortfolio;
