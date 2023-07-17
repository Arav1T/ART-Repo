import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedArtistsPage = () => {
    const  FeaturedData=[
        {
        name : 'Artist 1',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam a fermentum consequat.',
        src : ''
    },
    {
        name : 'Artist 1',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam a fermentum consequat.',
        src : ''
    },
    {
        name : 'Artist 1',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam a fermentum consequat.',
        src : ''
    },
    {
        name : 'Artist 1',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam a fermentum consequat.',
        src : ''
    },
    {
        name : 'Artist 1',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam a fermentum consequat.',
        src : ''
    },
    {
        name : 'Artist 1',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam a fermentum consequat.',
        src : ''
    },
]
  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-600 py-12 relative top-16">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Featured Artists
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {
            FeaturedData.map((e)=>{
                return  <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300">
            <h2 className="text-2xl font-bold mb-4">{e.name}</h2>
            <p className="text-gray-700 mb-4">
              {e.desc}
            </p>
            <Link
              to={e.src}
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              View Profile
            </Link>
          </div>
               
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtistsPage;
