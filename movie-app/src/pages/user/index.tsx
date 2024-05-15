import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './_components/header/Header';
import Footer from './_components/footer/Footer';

export default function Index() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
