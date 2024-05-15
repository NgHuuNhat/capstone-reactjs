import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/user';
import TrangChu from './pages/user/trang-chu/TrangChu';
import TrangDatVe from './pages/user/trang-dat-ve/TrangDatVe';
import TrangChiTietPhim from './pages/user/trang-chi-tiet-phim/TrangChiTietPhim';
import DangKy from './pages/user/dang-ky/DangKy';
import DangNhap from './pages/user/dang-nhap/DangNhap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}>
          
          <Route path='/' element={<TrangChu />} />
          <Route path='/chi-tiet-phim' element={<TrangChiTietPhim />} />
          <Route path='/dat-ve' element={<TrangDatVe />} />
          <Route path='/dang-ky' element={<DangKy />} />
          <Route path='/dang-nhap' element={<DangNhap />} />

        </ Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
