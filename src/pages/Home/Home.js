import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";
import Logo from "./../../images/logo.png";

function Home() {
  const RenderHero = () => {
    return (
      <React.Fragment>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src={Logo} />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
                Buat Cerita Menarik
                <br class="hidden lg:inline-block" />
                Sesuai Yang Kamu Mau
              </h1>
              <p class="mb-8 leading-relaxed text-lg">
                Buat cerita tentang hal-hal apapun yang kamu inginkan mulai <br class="hidden lg:inline-block" /> dari percintaan, mencari teman, hingga bekerja sesuai cita-cita kamu!
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full text-lg">Yuk Mulai!</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg">Discord</button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };

  return (
    <>
      <Seo title={"Ayo main Roleplay! | Republic City"} />
      <RenderHero />
      <Footer />
    </>
  );
}

export default Home;
