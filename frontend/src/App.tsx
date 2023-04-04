import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './custom';
import MovieList from './pages/MovieCatalog/Movies';
//import pagename from "./pagename";
// Used for the browser routing, pretty sick
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'; //Need to build nav bar here
import NotFound from './pages/404';
import Podcast from './pages/PodcastPage';
import Home from './pages/Home';
import MovieCatalog from './pages/MovieCatalog/MovieCatalog';

function App() {
  return (
    // <div>
    //   <TopBanner saying="neato burrito" />
    //   <MovieList />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Movies" element={<MovieCatalog />} />
          <Route path="Podcasts" element={<Podcast />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
