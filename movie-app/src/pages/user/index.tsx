import React from "react";
import { Outlet } from "react-router-dom";
import ListMoviePage from "./home/list-movie/ListMovie";
import HomeCarousel from "./_components/HomeCarousel/HomeCarousel";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import SystemCinema from "./home/system-cinema/SystemCinema";

export default function IndexHome() {
  return (
    <div>
      <Header />
      <Outlet />
      <HomeCarousel /> 
      <ListMoviePage />
      <SystemCinema />
      <Footer />
    </div>
  );
}
