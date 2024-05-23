import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed p-4 bg-coolGray-100 text-coolGray-800 z-10 bg-opacity-40 bg-black text-white w-full page-header">
      <div className="container flex justify-between h-16 mx-auto">
        {/* <a
          rel="noopener noreferrer"
          href="#!"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        > */}
        <NavLink to="/">
          <div className='w-100 text-light'>
            <img className='w-100'
              src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
              width={60}
              alt="logo"
            />
            {/* <br /> */}
            Galaxy Cinema
          </div>
        </NavLink>
        {/* </a> */}
        <ul className="items-stretch hidden space-x-3 lg:flex text-2xl text-light h-100 mt-2 text-light">
          {/* <li className="flex"> */}
            {/* <a
              rel="noopener noreferrer"
              href="#!"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
            > */}
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link my-active" : "nav-link"
              }
              to="/book-ticket"
            >
              <img src="btn-ticket.42d72c96.webp" width={130} alt="muave" />
              </NavLink> */}
            {/* </a> */}
          {/* </li> */}
          <li className="flex text-light">
            {/* <a
              rel="noopener noreferrer"
              href="#!"
              className="flex items-center -mb-1 border-b-2 dark:border-"
            > */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link my-active text-light" : "nav-link text-light"
              }
              to="/">Phim</NavLink>
            {/* </a> */}
          </li>
          <li className="flex">
            {/* <a
              rel="noopener noreferrer"
              href="#!"
              className="flex items-center -mb-1 border-b-2 dark:border-"
            > */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link my-active text-light" : "nav-link text-light"
              }
              to="/news"
            >Góc điện ảnh</NavLink>
            {/* </a> */}
          </li>
          <li className="flex">
            {/* <a
              rel="noopener noreferrer"
              href="#!"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            > */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link my-active text-light" : "nav-link text-light"
              }
              to="/events"
            >
              Sự kiện
            </NavLink>
            {/* </a> */}
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink className="nav-link" to="/login">
            <Button className="self-center size-auto border-none rounded">Đăng nhập</Button>
          </NavLink>
          <NavLink className="nav-link" to="/register">
            <Button className="self-center size-auto border-none font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Đăng ký</Button>
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg> */}
        </button>
      </div>
    </header>
  );
}
