import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const FindCoFounderPage = () => {
    
    const { user, isAuthenticated, logout } = useAuth0();
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            },
        },
    };

    // Fetch user data from the Random User API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=10');
                setUsers(response.data.results);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const closeUserDetails = () => {
        setSelectedUser(null);
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

                    {/* Co-founder List */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-subheading text-black mb-4">
                            Find a Co-founder
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {users.map((user, index) => (
                                <motion.div
                                    key={index}
                                    whileHover="hover"
                                    className="bg-gray-100 rounded-lg p-4 cursor-pointer"
                                    onClick={() => handleUserClick(user)}
                                >
                                    <img
                                        src={user.picture.large}
                                        alt={`${user.name.first} ${user.name.last}`}
                                        className="w-24 h-24 rounded-full mx-auto mb-2"
                                    />
                                    <p className="text-lg font-semibold">
                                        {user.name.first} {user.name.last}
                                    </p>
                                    <p className="text-gray font-normal">{user.email}</p>
                                    <button
                                        className="bg-greenish-black text-white py-2 px-4 rounded-full text-md mt-4 focus:outline-none focus:ring-2 focus:ring-red"
                                    >
                                        Connect
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* User Details Modal */}
                    {selectedUser && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <button
                                    className="absolute top-4 right-4 text-red hover:text-red-dark focus:outline-none"
                                    onClick={closeUserDetails}
                                >
                                    Close
                                </button>
                                <img
                                    src={selectedUser.picture.large}
                                    alt={`${selectedUser.name.first} ${selectedUser.name.last}`}
                                    className="w-32 h-32 rounded-full mx-auto mb-4"
                                />
                                <p className="text-xl font-semibold text-center">
                                    {selectedUser.name.first} {selectedUser.name.last}
                                </p>
                                <p className="text-gray font-normal text-center">
                                    {selectedUser.email}
                                </p>
                                {/* Add more user details here */}
                            </div>
                        </div>
                    )}

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

export default FindCoFounderPage;
