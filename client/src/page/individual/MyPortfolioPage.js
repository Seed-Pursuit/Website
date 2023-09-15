import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';

const MyPortfolioPage = () => {
    const { user, isAuthenticated, logout } = useAuth0();

    const [portfolioData, setPortfolioData] = useState({
        bio: '',
        education: '',
        experience: '',
        skills: '',
        contact: '',
    });

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            },
        },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPortfolioData({
            ...portfolioData,
            [name]: value,
        });
    };

    const handleSaveChanges = () => {
        // savePortfolioData(portfolioData);
    };

    return (
        <div className="bg-soft min-h-screen py-20">
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                    {/* User Profile */}
                    {/* <img src={image} alt="seed-pursuit" height={300} /> */}

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

                    {/* My Portfolio Form */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-subheading text-black mb-4">
                            My Portfolio
                        </h3>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="bio" className="block text-lg font-normal">
                                    Bio
                                </label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    value={portfolioData.bio}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg p-2"
                                    rows="4"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="education" className="block text-lg font-normal">
                                    Education
                                </label>
                                <textarea
                                    id="education"
                                    name="education"
                                    value={portfolioData.education}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg p-2"
                                    rows="4"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="experience" className="block text-lg font-normal">
                                    Experience
                                </label>
                                <textarea
                                    id="experience"
                                    name="experience"
                                    value={portfolioData.experience}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg p-2"
                                    rows="4"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="skills" className="block text-lg font-normal">
                                    Skills
                                </label>
                                <textarea
                                    id="skills"
                                    name="skills"
                                    value={portfolioData.skills}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg p-2"
                                    rows="4"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contact" className="block text-lg font-normal">
                                    Contact Information
                                </label>
                                <textarea
                                    id="contact"
                                    name="contact"
                                    value={portfolioData.contact}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg p-2"
                                    rows="4"
                                />
                            </div>

                            {/* Save Changes Button */}
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                className="bg-greenish-black text-white py-4 px-4 rounded-full text-lg hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red mt-8"
                                onClick={handleSaveChanges}
                            >
                                Save Changes
                            </motion.button>
                        </form>
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

export default MyPortfolioPage;
