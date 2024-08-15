import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHome from './components/MainHome';
import NewYork from './components/NewYork';
import AppStore from './components/AppStore';

const CityRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/cities/new-york" element={<NewYork />} />
      <Route path="/cities/las-vegas" element={<MainHome />} />
      <Route path="/cities/rome" element={<MainHome />} />
      <Route path="/cities/paris" element={<MainHome />} />
      <Route path="/cities/london" element={<MainHome />} />
      <Route path="/cities/dubai" element={<MainHome />} />
      <Route path="/cities/barcelona" element={<MainHome />} />
      <Route path="/cities/madrid" element={<MainHome />} />
      <Route path="/cities/singapore" element={<MainHome />} />
      <Route path="/cities/venice" element={<MainHome />} />
      <Route path="/cities/milan" element={<MainHome />} />
      <Route path="/cities/naples" element={<MainHome />} />
      <Route path="/cities/budapest" element={<MainHome />} />
      <Route path="/cities/edinburg" element={<MainHome />} />
      <Route path="/cities/florence" element={<MainHome />} />
      <Route path="/app" element={<AppStore />} />
    </Routes>
  </BrowserRouter>
);

export default CityRoutes;
