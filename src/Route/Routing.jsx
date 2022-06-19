import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

import TrandingNav from '../components/TrandingNav'
import Home from '../pages/Home'
import Opinion from '../pages/Opinion';
import Business from "../pages/Business";

import News from '../pages/News';
import Login from '../pages/Login'
import Sports from '../pages/Sports'
import Entertainment from '../pages/Entertainment'
import CrossWord from '../pages/CrossWord'
import Science from '../pages/Science'
import Details from '../pages/Details'
import RequiredAuth from '../hoc/RequiredAuth'

const Routing = () => {
  return (
    <div>
      <Navbar />
      <TrandingNav />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<Details />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/crossword" element={<CrossWord />} />
        <Route path="/science" element={<Science />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing