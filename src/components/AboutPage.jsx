import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          About the Exhibition
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 md:pr-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus nunc id arcu tincidunt, at efficitur mi tempus.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Event Details</h2>
            <p className="text-gray-700">
              Date: September 10 - September 15, 2023<br />
              Time: 10:00 AM - 6:00 PM<br />
              Venue: New Delhi Art Gallery<br />
              Entry Fee: Free<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
