import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

function Donasi() {
  const RenderDonate = () => {
    return <div>Donasi</div>;
  };
  return (
    <>
      <Seo title={"Donasi | Republic City"} />
      <RenderDonate />
      <Footer />
    </>
  );
}

export default Donasi;
