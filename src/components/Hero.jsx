import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden pt-16">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Building digital products</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
                        with passion & purpose
                    </span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    I'm a developer who loves creating beautiful, functional, and user-friendly websites and mobile apps.
                    Powered by modern tech like Flutter, Kotlin, Swift, React, Python and Appwrite. Looking for new opportunities to work with you.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                        <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
