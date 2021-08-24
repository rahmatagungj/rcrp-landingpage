import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

function Rules() {
  const RenderRules = () => {
    return (
      <React.Fragment>
        {/* Client Rules */}
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
        {/* Client Rules end */}


        {/* Roleplay */}
          <section className="container px-5 py-3 mx-auto">
            <div className="flex items-center justify-center flex-wrap -m-4">
              <div className="p-3 lg:w-2/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                  <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BAB 2</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PERATURAN</h2>
                  <p className="text-4xl font-medium text-black pb-4 mb-4 border-b border-gray-200 leading-none">ROLEPLAY</p>
                  
                  <h1 className="flex items-center text-gray-900 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Apa itu Roleplay?
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Roleplay (RP) merupakan suatu kegiatan bermain peran, dengan memainkan sebuah Karakter yang 
                    dibuat dengan adanya sifat, watak serta Alur dan Jalan cerita sendiri dengan memperhatikan atura-aturan yang ada. 
                    Dalam melakukan Roleplay. Karakter yang dimainkan bisa merealisasikan layaknya dalam Real Life.
                    Siapa karakter anda, bagaimana Karakter anda tersebut , Ngapain saja bisa dilakukan. 
                    Contohnya saja Kita bisa menjadi seorang Goodside seperti Kepolisian, Medic dan sebagainya, bahkan bisa 
                    menjadi seorang badside seperti Gengster dan Mafia. Dalam hal ini, Karakter yang diperankan tersebut 
                    harus benar-benar menjiwai dan mendalami bagaimana karakter anda tersebut, sama hal nya dengan kehidupan
                    nyata.
                  </p>

                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    In Character (IC)
                  </h1>
                  <p className="flex items-center text-gray-600">
                    In Character (IC) segala sesuatu yang berhubungan dengan karaktermu. Misalnya nama karakter InGame-mu
                    (Kehidupan didalam Game)
                    adalah Cecep Setiawan. In Character adalah Segala sesuatu yang berhubungan dengan Cecep Setiawan seperti
                    riwayat hidup, sifat dan perilakunya.
                  </p>


                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Out Of Character (OOC)
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Out Of Character (OOC) adalah kebalikan dari In Character (IC). Segala sesuatu yang berhubungan dengan 
                    dirimu sendiri yang sedang bermain. Sesuatu hal  yang tidak ada hubungannya dengan In Character (IC) 
                    Cecep Setiawan.
                  </p>
                  
                  <div>
                    <p className=" mt-5 text-green-400 italic">
                      *Kesimpulan : In Character adalah Karakter yang ada didalam Game seperti Cecep Setiawan dan
                      OOC adalah anda yang sedang bermain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        {/* Roleplay end*/}
          

        {/* Character Rules */}
        <section className="container px-5 py-3 mx-auto">
          <div className="flex items-center justify-center flex-wrap -m-4">
              <div className="p-3 lg:w-2/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                  <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BAB 3</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">MEMULAI</h2>
                  <p className="text-4xl font-medium text-black pb-4 mb-4 border-b border-gray-200 leading-none">ROLEPLAY</p>
                  
                  <h1 className="flex items-center text-gray-900 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Kamu dan Karaktermu.
                  </h1>
                  <p className="flex items-center text-gray-600">
                  Kamu dan Karaktermu. Pertama-tama dan yang paling utama dalam bermain roleplay adalah 
                  mengetahui peran karakter anda yang nantinya akan dimainkan ketika di dalam game. Seperti 
                  halnya dalam drama/teater, kamu sebagai produser, dan karaktermu sebagai pemeran.
                  Mungkin bagi anda di dunia nyata seperti mencuri, minum minuman beralkohol, memakai narkoba, 
                  ataupun membunuh orang adalah hal yang tidak baik, tetapi bukan berarti karaktermu juga begitu.
                  </p>
                  <span className=" mt-2 text-green-400 italic">
                    Ini hanya game, kamu harus membiarkan karaktermu berperan sesuai dengan peranannya.
                  </span>
                  <p className="flex items-center text-gray-600 mt-2 ">
                  Karaktermu harus mempunyai umur, latar belakang cerita, penampilan, sifat khusus atau watak, 
                  tujuan hidup. Hal-hal ini akan berguna ketika anda memainkan peran karaktermu, kreatifitasmu dibutuhkan disini.
                  </p>
                  <li><span className=" text-green-500 ">Umur</span></li>
                  <p className="flex items-center text-gray-600 mt-2 "> Umur karakter anda sangat penting, 
                    apakah karakter anda berperan menjadi anak-anak, remaja, dewasa, atau bahkan orang tua. 
                  </p>
                  
                  <li><span className=" text-green-500">Latar Belakang Karakter</span></li>
                  <p className="flex items-center text-gray-600 mt-2 ">
                    Setiap orang mempunyai latar belakang cerita yang berbeda-beda, ada yang baik ada juga 
                    yang buruk, dan ini merupakan hal penting untuk karakter anda. Sebagai contoh, bagaimana 
                    karakter anda bisa pindah ke Los Santos? bagaimana dengan keluarga karakter anda? 
                    bagaimana masa kanak-kanak karakter anda? mengapa karakter anda pindah ke Los Santos, 
                    atau bahkan jika latar belakang cerita karaktermu lahir di Los Santos, ceritakan! Latar 
                    belakang cerita karatkter anda akan sangat berpengaruh dengan peranan karakter anda, sifat karakter anda, dan peranan karakter anda di masa yang akan datang.
                  </p>

                  <li><span className=" text-green-500">Penampilan</span></li>
                  <p className="flex items-center text-gray-600 mt-2 ">
                    Penampilan karaktermu tentunya berbeda dengan skin karakter bawaan GTA, karena skin hanya 
                    sebagai figur atau penampilan singkat karakter anda, belum tentu karakter anda sepenuhnya 
                    sama dengan skin bawaan GTA. Karena skin juga terbatas.  
                  </p>

                  <li><span className=" text-green-500">Tujuan Hidup</span></li>
                  <p className="flex items-center text-gray-600 mt-2 ">
                    Karakter anda harus mempunyai tujuan hidup atau cita-cita dari peranan karakter anda, 
                    hal ini bergantung dari masa lalu (latar belakang cerita), lingkungan hidup, dan masa 
                    kanak-kanak karakter anda.  
                  </p>

                  <li><span className=" text-green-500">Sifat khusus atau Watak</span></li>
                  <p className="flex items-center text-gray-600 mt-2 ">
                  Ini tentang bagamiana karakter anda bersosialisasi dengan pemain lain. Apa watak karakter 
                  anda, apa agama karakter anda, apakah dia mempunyai cacat mental, apakah karakter anda 
                  bersifat baik atau jahat, dan lain sebagainya. Hal yang sangat penting.  
                  </p>


                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Your Environtment
                  </h1>
                  <p className="flex items-center text-gray-600">
                  Lingkunganmu. Pelajarilah tentang dimana lingkungan karakter anda bermain peran. Los Santos 
                  berperan sebagai salah satu kota di Amerika Serikat, jadi hal-hal tertentu di dunia nyata 
                  (khususnya negara kita, Indonesia) tidak dapat disamakan.
                  </p>


                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Creating Roleplay
                  </h1>
                  <p className="flex items-center text-gray-600">
                  Anda seorang roleplayer! Anda harus menghasilkan perannya! Seperti yang tadi saya tuliskan 
                  di atas, anda produser, dan karakter anda adalah aktornya! Ini server Roleplay! Anda harus 
                  menjadi Roleplayer terbaik! Dan itu sangat mudah.
                  </p>
                  <p>
                    <li>
                      <span className=" text-green-500">Percakapan. </span>Terkadang kita hanya diam, menunggu paycheck, atau tidak ada hal lain yang 
                      padahal ada pemain lain disekitar anda, anda ajak mengobrol, mungkin anda bisa mengobrol 
                      tentang keadaan lalu lintas, cuaca, suatu kejadian, musik, olah raga, atau bahkan 
                      menceritakan tentang latar belakang cerita karaktermu dengan karakter orang lain, dan juga 
                      lelucon yang membuat karakter orang lain tertawa. Kurangi OOC Chat dan perbanyak IC. Anda 
                      juga bisa mengajak RP dengan seseorang.
                    </li>
                    <li>
                    <span className=" text-green-500">Melakukan Tindak Kriminal. </span>Tindakan kriminal 
                    tidak hanya rob atau scam, ketika karakter anda mempunyai teman yang mempunyai sifat atau 
                    ideologi yang sama dengan karakter anda, khususnya dalam bidang kriminal, hal ini dapat 
                    menghasilkan roleplay untuk semua orang.
                    </li>
                  </p>
                  <p className="text-green-500 mt-2 italic">Sebenarnya masih banyak hal yang bisa untuk menciptakan suatu peranan (Roleplay), 
                    disinilah poin penting tentang Roleplay, Roleplay itu merupakan perkembangan bagaimana 
                    seseorang dalam memainkan peranannya.
                  </p>

                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Languange
                  </h1>
                  <p className="flex items-center text-gray-600">
                  Penggunaan bahasa, tata cara penulisan bahasa yang benar dalam Roleplay itu sangat penting. 
                  Penulisan huruf kapital pada awal kalimat, nama orang, nama tempat dan tanda baca titik, 
                  koma, tanda tanya, tanda seru sesuai dengan percakapan yang dibutuhkan harus sesuai.
                  </p>

                  <h1 className="flex items-center text-gray-900 mt-2 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Realism, and logic
                  </h1>
                  <p className="flex items-center text-gray-600">
                  Roleplay kalian haruslah bersifat logis. Banyak sekali orang yang mempunyai sifat mau menang 
                  sendiri terhadap karakternya, seperti contoh: Anda mau ketika anda Roleplay karakter anda 
                  mencuri (rob) karakter orang lain, namun anda sendiri tidak mau ketika karakter anda dicuri 
                  (dirob) oleh karakter orang lain, atau tidak mau ketika karakter anda ditangkap oleh karakter 
                  yang berperan sebagai Polisi, dan lain sebagainya. Anda tidak boleh juga memaksa kehendak 
                  seseorang dalam Roleplay, sering terjadi kasus-kasus seperti ini dalam Roleplay.
                  </p>

                  <span className=" mt-5 text-green-400 italic">
                    *Kurangilah sikap seperti itu, janganlah jadi orang yang "egois". Roleplay adalah permainan
                    yang bedasarkan Kenyataan yang masuk akal. Setiap peranan, ada batasnya masing-masing.
                  </span>

                </div>
              </div>
            </div>
          </section>
        {/* Character Rules end */}



        {/* Rules */}
          <section className="container px-5 py-3 mx-auto">
            <div className="flex items-center justify-center flex-wrap -m-4">
              <div className="p-3 lg:w-2/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
                  <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">BAB 4</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PERATURAN</h2>
                  <p className="text-4xl font-medium text-black pb-4 mb-4 border-b border-gray-200 leading-none">INGAME</p>
                  
                  <h1 className="flex items-center text-gray-900 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Mixxing
                  </h1>
                  <p className="flex items-center text-gray-600">
                    Mixxing adalah Menggabungkan segala hal yang berkaitan dengan IC terhadap OOC, atau sebaliknya.
                  </p>
                  <p className=" text-red-500 italic">
                    *Sanksi : Peringatan / Jail 5 Menit.
                  </p>

                </div>
              </div>
            </div>
          </section>
        {/* Rules End */}


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
