import React from "react";

const Navbars = () => {
  return(
    <header class="text-white-400 bg-blueGray-900 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span class="ml-3 text-xl">Republic City</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hoover:text-white">Beranda</a>
          <a class="mr-5 hoover:text-white">Forum</a>
          <a class="mr-5 hoover:text-white">Donasi</a>
          <a class="mr-5 hoover:text-white">UCP</a>
          <a class="mr-5 hoover:text-white">Status</a>
          <a class="mr-5 hoover:text-white">LOGIN</a>
        </nav>
      </div>
    </header>
  ) 
};

export default Navbars;