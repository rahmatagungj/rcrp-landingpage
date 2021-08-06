import React from "react";
import Seo from "../../components/Seo";

function Forum() {
  const RenderForum = () => {
    return <div>Forum</div>;
  };
  return (
    <>
      <Seo title={"Forum | Republic City"} />
      <RenderForum />
    </>
  );
}

export default Forum;
