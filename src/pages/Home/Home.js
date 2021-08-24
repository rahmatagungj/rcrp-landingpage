import React from "react";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import Logo from "./../../images/logo.png";
import BannerLogo from './../../images/bannerLogo.png'
import Hero from "./../../images/home.jpg";

function Home() {
  const RenderHero = () => {
    return (
      <React.Fragment>
        <div className="relative">
          <img src={Hero} className="absolute inset-0 object-cover w-full h-full" alt="bg-private" />
          <div className="relative bg-green-900 bg-opacity-80">
            <section className="relative">
              {" "}
              {
                <div className="container mx-auto flex px-28 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:p-16 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={Logo} />
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold font-sans text-white">
                      Buat Cerita Menarik
                      <br className="hidden lg:inline-block" />
                      Sesuai Yang Kamu Mau
                    </h1>
                    <p className="mb-8 leading-relaxed text-white text-justify">Buat cerita tentang hal-hal apapun yang kamu inginkan mulai dari percintaan, mencari teman, hingga bekerja sesuai cita-cita kamu!</p>
                    <div className="flex justify-center">
                      <Link to="/daftar" className="inline-flex font-semibold text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-md">
                        Yuk Mulai!
                      </Link>
                      <button className="ml-4 inline-flex font-semibold text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-md">Discord</button>
                    </div>
                  </div>
                </div>
              }
              {
                <svg className="-mt-36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,192L80,170.7C160,149,320,107,480,117.3C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
              }
            </section>
          </div>
        </div>


        {/* About */}
        <section class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative px-4 py-10 bg-green-100 shadow-lg sm:rounded-3xl sm:p-20">
              <div class="max-w-md mx-auto">
                <div>
                  <img src={BannerLogo} class="h-7 sm:h-8"/>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="py-8 text-base leading-6 space-y-4 text-black sm:text-lg sm:leading-7">
                    <p>
                    Merupakan Komunitas Game Online dari MTA (Multi Theft Auto Modifikasi Server) yang 
                    memiliki basic Indonesia Culture untuk bermain peran. Republic City merupakan Server 
                    Roleplay, dengan aturan main seperti kehidupan sehari-hari (real life). kamu sendiri 
                    dapat menentukan peran kamu akan menjadi apa didalam server.
                    </p>
                    
                    
                  </div>
                  <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                    <p>Ayo bergabung bersama Republic City</p>
                    <p>
                      <Link to="/" class="text-green-500 hover:text-green-900"> JOIN &rarr; </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About end */}


        {/* Featured */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">Mengapa Harus Kami?</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-lg">Karena kami memiliki beberapa hal yang dapat diunggulkan</p>
            </div>
            <div class="flex flex-wrap my-12 dark:text-white">
              <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Voice Chat
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Adanya Fitur Voice Chat didalam InGame memberikan kesan dalam bermain lebih nyata.
                  </p>
              </div>
              <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Indonesia Culture
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Budaya Indonesia dijadikan basic dalam bermain peran agar Roleplay yang dijalankan mudah menyesuaikan 
                      dan lebih maksimal sesuai dengan kehidupan nyata. 
                  </p>
              </div>
              <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Feature yang menarik
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                      Segala Feature yang ada dalam server "out of the box" dan menjadi daya tarik untuk bermain peran.
                  </p>
              </div>
              <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                          Respect
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                  Memiliki Rasa Hormat dan Rasa peduli terhadap sesama players.
                  </p>
              </div>
              <div class="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                        Sosialisasi
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    Bertemu sengan siapapun membangun kelompak dan menjadi lawan/teman dalam peran roleplay.
                  </p>
              </div>
              <div class="w-full md:w-1/2 lg:w-1/3 p-8">
                  <div class="flex items-center mb-6">
                      <svg width="20" height="20" fill="currentColor" class="h-6 w-6 text-indigo-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                          </path>
                      </svg>
                      <div class="ml-4 text-xl">
                        Height FPS & Low Ping
                      </div>
                  </div>
                  <p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
                    Pengoptimalan Resource membuat FPS lebih tinggi. Memiliki PING yang rendah dan stabil
                  </p>
              </div>
          </div>
          </div>
        </section>
        {/* featured end */}

        {/* specification */}
        <section className="text-gray-600 body-font overflow-hidden flex items-center justify-center">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Spesifikasi</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 text-lg">Berikut adalah spesifikasi yang dibutuhkan.</p>
            </div>
            <div className="flex items-center justify-center flex-wrap -m-4">
              <div className="p-3 lg:w-2/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <span className="bg-gray-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">MINIMUM</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PAKET</h2>
                  <h1 className="text-4xl font-medium text-black pb-4 mb-4 border-b border-gray-200 leading-none">HEMAT</h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Windows 7
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Intel Pentium 4 or AMD Athlon XP
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    1 GB RAM
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Clean installation of Grand Theft Auto: San Andreas
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    3.7 GB of free hard disk space
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Nvidia GeForce 4 series
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    DirectX 9.0 compatible sound card
                  </p>
                </div>
              </div>
              <div className="p-2 lg:w-2/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                  <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">REKOMENDASI</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PAKET</h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span className="text-4xl font-semibold">SULTAN</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Windows 10
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Intel Core 2 Duo Processor or AMD equivalent
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    2 GB RAM
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Clean installation of Grand Theft Auto: San Andreas
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    5 GB of free hard disk space
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Nvidia GeForce FX series or higher
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    DirectX 9.0 compatible sound card
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* specification end */}
      </React.Fragment>
    );
  };

  return (
    <>
      <Seo />
      <RenderHero />
      <Footer />
    </>
  );
}

export default Home;
