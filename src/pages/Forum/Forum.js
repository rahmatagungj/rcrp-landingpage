import React from "react";
import Footer from "../../components/Footer";
import Seo from "../../components/Seo";

function Forum() {
  const RenderForum = () => {
    return <div>Forum</div>;
  };
  return (
    <>
      <Seo title={"Forum | Republic City"} />
      <RenderForum />
      <Footer />
    </>
  );
}

export default Forum;
