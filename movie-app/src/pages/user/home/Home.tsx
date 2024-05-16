import React from 'react'
import Header from '../_components/header/Header';
import Footer from '../_components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
