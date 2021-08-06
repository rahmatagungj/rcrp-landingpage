import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

function Status() {
  const RenderStatus = () => {
    return <div>Status</div>;
  };
  return (
    <>
      <Seo title={"Status | Republic City"} />
      <RenderStatus />
      <Footer />
    </>
  );
}

export default Status;
