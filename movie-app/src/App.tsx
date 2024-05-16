import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/user';
import TrangChu from './pages/user/trang-chu/TrangChu';
import TrangChiTietPhim from './pages/user/trang-chu/trang-chi-tiet-phim/TrangChiTietPhim';
import DangKy from './pages/user/dang-ky/DangKy';
import DangNhap from './pages/user/dang-nhap/DangNhap';

const TrangDatVeLazy = lazy(() => import('./pages/user/trang-dat-ve/TrangDatVe'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}>

          <Route path='/' element={<TrangChu />}>
            <Route path='/chi-tiet-phim' element={<TrangChiTietPhim />} />
          </Route>

          <Route path='/dat-ve/:id' element={<Suspense fallback={<p>Loading...</p>}><TrangDatVeLazy /></Suspense>} />
          <Route path='/dang-ky' element={<DangKy />} />
          <Route path='/dang-nhap' element={<DangNhap />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
