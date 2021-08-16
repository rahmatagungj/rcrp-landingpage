import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

function Rules() {
  const RenderRules = () => {
    return <div>Peraturan</div>;
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
