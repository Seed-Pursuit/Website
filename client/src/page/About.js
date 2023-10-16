import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaRegGem, FaWallet, FaBitcoin, FaRegHandshake, FaRegNewspaper, FaLightbulb, FaUserShield, FaAward, FaComments } from 'react-icons/fa';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-4 md:p-12">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About Our Project</h1>
                <p className="text-lg text-gray-600 mb-4">
                    Welcome to our blockchain-based crowdfunding and networking platform designed to empower startups through transparent fund tracking using gamification. We're on a mission to revolutionize the way startups raise capital and connect with investors.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    Our project is the brainchild of a dedicated team of B.Tech students from the year 2023-24. We are passionate about combining the power of blockchain, web development, and crowdfunding to make the startup ecosystem more accessible and transparent.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    Our journey began with the motivation to address the challenges that entrepreneurs face when it comes to raising funds for their projects. We understand that traditional fundraising methods can be cumbersome and that there is often a lack of transparency in fund allocation. To overcome these issues, we've conceptualized a platform that leverages blockchain technology to provide entrepreneurs with a secure, transparent, and efficient way to raise funds for their innovative ideas.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                    Our platform offers features like crowdfunding campaigns, networking capabilities, transparent fund tracking, and user-friendly interfaces. By focusing on blockchain integration, we ensure that all transactions are secure and transparent, allowing contributors to track fund usage in real-time.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                    As we move forward, we plan to expand the project by enhancing project verification processes, adding monitoring and reporting tools, integrating with additional payment gateways, and fostering a culture of continuous learning and adaptation. We're excited to bring this project to life and make a positive impact on the startup community.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Project Areas</h2>
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                        <div className="flex items-center">
                            <FaReact className="text-4xl text-blue-500 mr-2" />
                            <span className="text-xl font-bold">Web Development</span>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                        <div className="flex items-center">
                            <FaDatabase className="text-4xl text-blue-500 mr-2" />
                            <span className="text-xl font-bold">Blockchain Technology</span>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                        <div className="flex items-center">
                            <FaWallet className="text-4xl text-blue-500 mr-2" />
                            <span className="text-xl font-bold">Crowdfunding</span>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                        <div className="flex items-center">
                            <FaRegHandshake className="text-4xl text-blue-500 mr-2" />
                            <span className="text-xl font-bold">Networking</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 my-4">Our Project Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-center">
                                <img src="https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxLCJub3NlIjo2LCJtb3V0aCI6MCwiZXllcyI6MiwiZXllYnJvd3MiOjMsImdsYXNzZXMiOjAsImhhaXIiOjU3LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=" alt="notion avatar" />
                                <h2 className="text-gray-800 font-semibold mx-4">Shruti Shende</h2>
                            </div>
                            <p className="text-gray-600 my-4">
                                Email: shruti.shende@cumminscollege.in
                                <br />
                                Phone: 9322626753
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-center">
                                <img src="https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo2LCJub3NlIjo5LCJtb3V0aCI6MTcsImV5ZXMiOjMsImV5ZWJyb3dzIjoxNCwiZ2xhc3NlcyI6MSwiaGFpciI6NTcsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==" alt="notion avatar" />                <h2 className="text-gray-800 font-semibold mx-4">Sawari Shinde</h2>
                            </div>
                            <p className="text-gray-600 my-4">
                                Email: sawari.shinde@cumminscollege.in
                                <br />
                                Phone: 9767541601
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-center">
                                <img src="https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxMywibm9zZSI6NCwibW91dGgiOjYsImV5ZXMiOjAsImV5ZWJyb3dzIjozLCJnbGFzc2VzIjowLCJoYWlyIjoxOSwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9" alt="notion avatar" />                <h2 className="text-gray-800 font-semibold mx-4">Vaishnavi Kale</h2>
                            </div>
                            <p className="text-gray-600 my-4">
                                Email: vaishnavi.a.kale@cumminscollege.in
                                <br />
                                Phone: 9172751350
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-center">
                                <img src="https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxLCJub3NlIjo0LCJtb3V0aCI6NiwiZXllcyI6MSwiZXllYnJvd3MiOjAsImdsYXNzZXMiOjAsImhhaXIiOjU0LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=" alt="notion avatar" />                <h2 className="text-gray-800 font-semibold mx-4">Shreya Jadhav</h2>
                            </div>
                            <p className="text-gray-600 my-4">
                                Email: shreya.s.jadhav@cumminscollege.in
                                <br />
                                Phone: 9420783191
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
