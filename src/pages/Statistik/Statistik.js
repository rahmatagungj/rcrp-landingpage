import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

function Statistic() {
  const RenderStatistik = () => {
    return <div>Statistic</div>;
  };
  return (
    <>
      <Seo title={"Statistik | Republic City"} />
      <RenderStatistik />
      <Footer />
    </>
  );
}

export default Statistic;
