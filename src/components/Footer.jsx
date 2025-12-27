import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                        Shaktisinh Jadeja
                    </span>
                    <p className="text-gray-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/shaktisinh" className="text-gray-400 hover:text-pink-500 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/shaktisinhjadeja/" className="text-gray-400 hover:text-pink-500 transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
