import React from 'react';

const Ticketing = () => {
  const ticketTypes = [
    {
      id: 1,
      name: 'General Admission',
      price: '$10',
      description: 'Access to all exhibitions',
    },
    {
      id: 2,
      name: 'VIP Pass',
      price: '$25',
      description: 'Exclusive entry to VIP events and guided tours',
    },
    {
      id: 3,
      name: 'Student Discount',
      price: '$5',
      description: 'Valid student ID required',
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-r from-purple-800 to-blue-600 relative top-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Ticketing</h1>
          <p className="mt-2 text-lg text-gray-100">
            Choose your ticket type and join us for an extraordinary art experience.
          </p>
        </div>
        <div className="mt-10 ">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {ticketTypes.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden "
              >
                <div className="px-6 py-8">
                  <div className="text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {ticket.name}
                    </h3>
                    <div className="mt-2">
                      <p className="text-lg text-gray-600">{ticket.price}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{ticket.description}</p>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-6 bg-gray-50">
                  <button
                    className="block w-full bg-gradient-to-r from-purple-800 to-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 focus:bg-blue-600 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketing;
