import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexAdmin from './pages/admin';
import IndexHome from './pages/user';
import Home from './pages/user/home/Home';
import ListMovie from './pages/user/home/list-movie/ListMovie';
import DetailMovie from './pages/user/home/detail-movie/DetailMovie';
import Auth from './pages/user/auth/Auth';
import Login from './pages/user/auth/login/Login';
import Register from './pages/user/auth/register/Register';
import BookTickets from './pages/user/book-tickets/BookTickets';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexHome />}>

          <Route path='/' element={<Home />}>
            <Route path='list-movie' element={<ListMovie />} />
            <Route path='detail-movie' element={<DetailMovie />} />
          </Route>

          <Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route path='/book-ticket/:id' element={<BookTickets />} />

        </Route>
        <Route path='/admin' element={<IndexAdmin />}>
          <Route path='' element={<IndexAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
