import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../images/logo.png";

const Navbars = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <div className="flex flex-wrap justify-center">
            <div className="w-9 mr-1">
              <img alt="..." src={Logo} className="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
            <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
              Republic City
            </Link>
          </div>
        </div>
        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <Link to="/" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800">
                Beranda
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Forum" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800">
                Forum
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Donasi" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800">
                Donasi
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Status" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800">
                Status
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Statistik" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800">
                Statistik
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Masuk"
                class="text-white bg-green-800 hover:bg-white hover:text-green-800 active:bg-green-800 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Masuk
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Daftar" class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-800" type="button">
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
