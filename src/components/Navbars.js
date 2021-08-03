import React from "react";

const Navbars = () => {
  return(
    <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-green-500 shadow sm:items-baseline w-full">
      <div class="mb-2 sm:mb-0 flex flex-row">
        <div class="h-10 w-10 self-center mr-2">
          <img class="h-10 w-10 self-center" src="./images/logo.png" />
        </div>
        <div>
          <a href="/home" class="text-2xl no-underline text-white font-sans font-bold">Republic City</a>
        </div>
      </div>

      <div class="sm:mb-0 self-center">
        <a href="/home" class="text-white hover:text-gray-900 hover:font-medium py-2 px-2 md:mx-2">Beranda</a>
        <a href="#" class="text-white hover:text-gray-900 hover:font-medium py-2 px-2 md:mx-2">Forum</a>
        <a href="/Donasi" class="text-white hover:text-gray-900 hover:font-medium py-2 px-2 md:mx-2">Donasi</a>
        <a href="/Status" class="text-white hover:text-gray-900 hover:font-medium py-2 px-2 md:mx-2">Status</a>
        <a href="/Statistik" class="text-white hover:text-gray-900 hover:font-medium py-2 px-2 md:mx-2">Statistik</a>
        <a href="/Login" class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800">LOGIN</a>
      </div>
    </nav>
) 
};

export default Navbars;