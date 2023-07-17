import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ArtistProfile from './components/ArtistProfile';
import EventSchedule from './components/EventSchedule';
import Ticketing from './components/Ticketing';
import VirtualGalleryTour from './components/VirtualGalleryTour';
import FeaturedArtistsPage from './components/FeaturedArtistsPage';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gradient-to-r from-purple-800 to-blue-600">
        <nav className="bg-transparent bg-gradient-to-r from-purple-950 to-blue-900 z-20 w-screen fixed">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-white text-xl font-bold">Art Exhibition</Link>
              </div>
              <div className="flex">
                <Link to="/artist-profiles" className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Artists</Link>
                <Link to="/event-schedule" className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Schedule</Link>
                <Link to="/ticketing" className="text-gray-300 hover:bg-gradient-to-r hover:from-purple-300 hover:to-blue-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tickets</Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" component={LandingPage} element={<LandingPage/>} />
          <Route path="/artist-profiles" component={ArtistProfile} element={<ArtistProfile/>} />
          <Route path="/event-schedule" component={EventSchedule} element={<EventSchedule/>} />
          <Route path="/ticketing" component={Ticketing} element={<Ticketing/>} />
          <Route path="/virtualgallerytour" component={VirtualGalleryTour} element={<VirtualGalleryTour/>} />
          <Route path="/featuredartistspage" component={FeaturedArtistsPage} element={<FeaturedArtistsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
