import React from 'react';

const ArtistProfile = () => {
    const ArtistData=[
        {
            name:'Artist Name',
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            src:["","",""]
        },
        {
            name:'Artist Name',
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            src:["","",""]
        },
        {
            name:'Artist Name',
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            src:["","",""]
        },
        {
            name:'Artist Name',
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            src:["","",""]
        },
        {
            name:'Artist Name',
            bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            src:["","",""]
        },
    ]
  return (
    <div className="py-12 bg-gradient-to-r from-purple-800 to-blue-600 relative top-16">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Artist Profile
        </h1>
          {ArtistData.map((e)=>{
            return  <>
        <div className="flex flex-col md:flex-row justify-between  mt-6 items-center">
            <div className="md:w-1/3 md:pr-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">{e.name}</h2>
            <p className="text-gray-100">
             {e.bio}
            </p>
          </div>
          <div className="md:w-2/3 md:pl-8 space-y-6 pt-5">
            <h2 className="text-2xl font-bold mb-4">Artworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={e.src[0]} alt="Artwork 1" className="w-64 h-48 md:w-72 object-cover rounded" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={e.src[1]} alt="Artwork 2" className="w-64 h-48 md:w-72 object-cover rounded" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <img src={e.src[2]} alt="Artwork 3" className="w-64 h-48 md:w-72 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
            </>
          })}
      </div>
    </div>
  );
};

export default ArtistProfile;
