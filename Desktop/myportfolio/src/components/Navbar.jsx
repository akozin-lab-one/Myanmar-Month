import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isAboutPage = location.pathname === '/about';

  const isServicePage = location.pathname === '/service';

  const isMyprojectPage = location.pathname === '/myproject';

  const isContactPage = location.pathname === '/contact';
  return (
    <div className="sticky top-0">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800  dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <p  className="flex items-center space-x-3 rtl:space-x-reverse">
          <i className="fa-solid fa-person fw-bold text-3xl m-2 hidden sm:block md:block lg:block"></i>
          <h5 className="uppercase font-extrabold" href="#">MyPortfolio</h5>
          </p>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                  <NavLink to="/" className={isHomePage ? 'bg-gray-200 p-2 border-none rounded' : ''}>
                  Home
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/about" className={isAboutPage ? 'bg-gray-200 p-2 border-none rounded' : ''}>
                    About
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/service" className={isServicePage ? 'bg-gray-200 p-2 border-none rounded' : ''}>
                    Services
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/myproject" className={isMyprojectPage ? 'bg-gray-200 p-2 border-none rounded' : ''}>
                    My Projects
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/contact" className={isContactPage ? 'bg-gray-200 p-2 border-none rounded' : ''}>
                    Contact
                  </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
