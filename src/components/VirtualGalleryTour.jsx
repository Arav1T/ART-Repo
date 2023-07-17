import React from 'react';

const VirtualGalleryTour = () => {
  
  const artPictures = [
    {
      id: 1,
      artist: 'Artist 1',
      imageUrl: '/path/to/artwork1.jpg',
    },
    {
      id: 2,
      artist: 'Artist 2',
      imageUrl: '/path/to/artwork2.jpg',
    },
    {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },{
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },{
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
      {
        id: 2,
        artist: 'Artist 2',
        imageUrl: '/path/to/artwork2.jpg',
      },
    
  ];

  return (
    <div className="py-1 bg-gradient-to-r from-purple-800 to-blue-600 relative top-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Virtual Gallery Tour
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {artPictures.map((art) => (
            <div key={art.id} className="relative w-full h-40 rounded-tr-lg rounded-bl-lg bg-white hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 aspect-ratio-4/3 border ">
              <img
                src={art.imageUrl}
                alt={`Artwork by ${art.artist}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-r from-purple-600 to-blue-400 bg-opacity-75 text-white py-2 px-4 rounded-bl-lg rounded-tr-lg">
                <p className="text-sm font-semibold">{art.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualGalleryTour;
