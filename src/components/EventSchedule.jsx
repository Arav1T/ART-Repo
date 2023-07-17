// import React from 'react';

// const EventSchedule = () => {
//   // Example data for event schedule
//   const eventSchedule = [
//     {
//       id: 1,
//       eventName: 'Opening Ceremony',
//       date: 'July 1, 2023',
//       time: '10:00 AM - 12:00 PM',
//       description: 'Join us for the grand opening of the art exhibition.',
//     },
//     {
//       id: 2,
//       eventName: 'Digital Art Showcase',
//       date: 'July 2, 2023',
//       time: '2:00 PM - 4:00 PM',
//       description: 'Experience the future of art with cutting-edge digital creations.',
//     },
//     // Add more events as needed
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-gray-800">Event Schedule</h1>
//       {eventSchedule.map((event) => (
//         <div key={event.id} className="my-8">
//           <h2 className="text-xl font-bold">{event.eventName}</h2>
//           <p className="text-gray-600">
//             <span className="font-semibold">Date:</span> {event.date}
//           </p>
//           <p className="text-gray-600">
//             <span className="font-semibold">Time:</span> {event.time}
//           </p>
//           <p className="mt-2">{event.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventSchedule;

import React from 'react';

const EventSchedule = () => {
  return (
    <div className="py-12 relative top-16">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Event Schedule
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 ">
            <h2 className="text-2xl font-bold mb-4">Talk: The Evolution of Digital Art</h2>
            <p className="text-gray-700 mb-4">Date: September 11, 2023</p>
            <p className="text-gray-700 mb-4">Time: 2:00 PM - 3:30 PM</p>
            <p className="text-gray-700">
              Join us as renowned digital artists discuss the evolution of digital art and its impact on the art world.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300">
            <h2 className="text-2xl font-bold mb-4">Workshop: Introduction to Sculpture</h2>
            <p className="text-gray-700 mb-4">Date: September 13, 2023</p>
            <p className="text-gray-700 mb-4">Time: 10:00 AM - 12:00 PM</p>
            <p className="text-gray-700">
              Learn the basics of sculpture from experienced sculptors and try your hand at creating your own masterpiece.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300">
            <h2 className="text-2xl font-bold mb-4">Art Demonstration: Mixed Media Techniques</h2>
            <p className="text-gray-700 mb-4">Date: September 14, 2023</p>
            <p className="text-gray-700 mb-4">Time: 4:00 PM - 5:30 PM</p>
            <p className="text-gray-700">
              Witness a live art demonstration showcasing various mixed media techniques used by contemporary artists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
