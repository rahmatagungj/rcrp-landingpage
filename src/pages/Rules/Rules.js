import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

function Rules() {
  const RenderRules = () => {
    return (
      <React.Fragment>
        {/* General Rules */}
        <section className="text-gray-600 body-font overflow-hidden flex items-center justify-center">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Peraturan</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 text-lg">
                Sebagai player yang sudah bergabung dengan komunitas umum Republic wajib mengikuti peraturan yang ada.
                Peraturan dibuat bukan untuk membatasi ruang gerak dalam melakukan Roleplay, namun untuk kenyamanan
                kita bersama.
              </p>
            </div>
            <div className="flex items-center justify-center flex-wrap -m-4">
              <div className="p-3 lg:w-2/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                  <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BAB 1</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PERATURAN</h2>
                  <p className="text-4xl font-medium text-black pb-4 mb-4 border-b border-gray-200 leading-none">SERVER</p>
                  
                  <h1 className="flex items-center text-gray-900 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Atittude / Sikap
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Bermain dan Bergabung dengan Komunitas Republic wajib memiliki sikap atau tingkah laku yang mencerminkan
                    kebaikan, termasuk di InGame maupun Out of Character (Real Life). Penggunaan kata-kata yang baik saat Voice 
                    maupun Chat.
                  </p>

                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Respect / Kepedulian
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Wajib menghormati dan Respect antar sesama Player dan Staff. Serta memiliki kepedulian sesama
                    tanpa memandang kekurangan. Memiliki rasa hormat, rasa peduli bahwasanya ada orang 
                    disekelilingmu yang juga ikut bermain dalam komunitas. Hargai setiap Roleplay yang mereka perankan
                    agar mereka juga menghargai Roleplay yang kita perankan.
                  </p>

                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Tindakan Mengganggu / Rusuh
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Dilarang untuk mengganggu atau merusuh player lain yang sedang melakukan Roleplay. Hanya mencari kenyamanan sendiri
                    dan melakukan tindakan merugi baik itu terhadap Player maupun kepada server.
                  </p>

                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Abuse / Exploit System
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Dilarang melakukan suatu hal demi memanfaatkan Bug yang ada untuk keuntungan pribadi. Anda mendapati
                    Bug? Laporkan kepada Staff untuk mendapatkan Reward.
                  </p>

                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Program Illegal
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Dilarang menggunakan program lain untuk kecurangan atau keuntungan pribadi.
                    Diharapkan untuk menggunakan Client MTA yang sudah ditetapkan oleh server. 
                  </p>
                    <li>Program Bot.</li>
                    <li>Cheat Engine.</li>
                    <li>Program Modifikasi lainnya</li>
                  <p>
                    Pengecualian 
                    diberikan jika kalian tidak bisa terhubung kedalam server diakibatkan Jaringan yang tidak
                    stabil dan memerlukan internet penghubung perantara (Proxy / VPN). Alamat IP yang digunakan 
                    untuk bermain adalah tanggung jawab penuh kamu sendiri.
                  </p>
                  
                  <div>
                    <p className=" mt-5 text-red-400 italic">
                      *Sanksi dan Hukuman yang dilakukan atas tindakan pelanggaran yang dilakukan akan mendapatkan 
                      teguran, Jailed, Warning, Banned Permanent.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* General Rules end */}
      </React.Fragment>
    );
};
  
  
  
  return (
    <>
      <Seo title={"Peraturan | Republic City"} />
      <RenderRules />
      <Footer />
    </>
  );
}

export default Rules;
