import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../images/logo.png";

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-8">
      <div className="bg-green-500 fixed left-0 right-0 top-0 z-50 shadow-lg">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <div className="flex flex-wrap justify-center">
                <div className="w-9 mr-1">
                  <img alt="..." src={Logo} className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
                <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                  Republic City
                </Link>
              </div>
            </div>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <Link to="/" className="flex items-center text-sm uppercase font-medium leading-snug text-white hover:text-green-800">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/forum" className="flex items-center text-sm uppercase font-medium leading-snug text-white hover:text-green-800">
                  Forum
                </Link>
              </li>
              <li>
                <Link to="/donasi" className="flex items-center text-sm uppercase font-medium leading-snug text-white hover:text-green-800">
                  Donasi
                </Link>
              </li>
              <li>
                <Link to="/Rules" className="flex items-center text-sm uppercase font-medium leading-snug text-white hover:text-green-800">
                  Peraturan
                </Link>
              </li>
              <li>
                <Link to="/statistik" className="flex items-center text-sm uppercase font-medium leading-snug text-white hover:text-green-800">
                  Statistik
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/masuk"
                  className="text-white bg-green-800 hover:bg-white hover:text-green-800 active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                >
                  Masuk
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/daftar" className="flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800" type="button">
                  Daftar
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline" onClick={() => setIsMenuOpen(true)}>
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                  <path fill="#ffffff" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                  <path fill="#ffffff" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link to="/" aria-label="Company" title="Company" className="inline-flex items-center">
                          <span className="ml-2 text-xl font-bold tracking-wide text-black">Republic City</span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-black" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link to="/" className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-primary-focus">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/forum" className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-primary-focus">
                            Forum
                          </Link>
                        </li>
                        <li>
                          <Link to="/donasi" className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-primary-focus">
                            Donasi
                          </Link>
                        </li>
                        <li>
                          <Link to="/status" className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-primary-focus">
                            Status
                          </Link>
                        </li>
                        <li>
                          <Link to="/statistik" className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-primary-focus">
                            Statistik
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/masuk"
                            className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-green-700 hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                          >
                            Masuk
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/daftar"
                            className="inline-flex items-center justify-center w-full h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-yellow-500 hover:bg-accent-focus focus:shadow-outline focus:outline-none"
                          >
                            Daftar
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbars;
