import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative top-20 flex flex-col items-center justify-center  bg-gradient-to-r from-purple-800 to-blue-600">
      <div className="max-w-4xl px-6 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
          Art Fusion Exhibition
        </h1>
        <p className="text-lg lg:text-xl text-white mb-12">
          Explore the Fusion of Conventional and Digital Art Forms
        </p>
        <Link
          to="/ticketing"
          className="bg-white hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 text-gray-800 font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out inline-block mb-8"
        >
          Get Tickets
        </Link>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300">
              <h2 className="text-2xl font-bold mb-4">Virtual Gallery Tour</h2>
              <p className="text-gray-800 mb-4">
                Immerse yourself in a virtual tour of the exhibition, exploring artworks from the comfort of your home.
              </p>
              <Link
                to="/virtualgallerytour"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300">
              <h2 className="text-2xl font-bold mb-4">Artwork Showcase</h2>
              <p className="text-gray-800 mb-4">
                Discover a diverse collection of conventional and digital artworks created by talented artists.
              </p>
              <Link
                to="/featuredartistspage"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                View Artworks
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300">
              <h2 className="text-2xl font-bold mb-4">Artist Talks & Workshops</h2>
              <p className="text-gray-800 mb-4">
                Engage with renowned artists through interactive talks and workshops, deepening your understanding of their creative processes.
              </p>
              <Link
                to="/event-schedule"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Check Schedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
