import React from 'react'
import Header from '../_components/header/Header';
import Footer from '../_components/footer/Footer';
import { Outlet } from 'react-router-dom';
import HomeCarousel from '../_components/HomeCarousel/HomeCarousel';
import ListMoviePage from './list-movie/ListMovie';
import SystemCinema from './system-cinema/SystemCinema';

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <HomeCarousel /> 
      <ListMoviePage />
      <SystemCinema />
      <Footer />
    </div>
  )
}
