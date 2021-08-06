import React from "react";
import Seo from "../../components/Seo";

function Status() {
  const RenderStatus = () => {
    return <div>Status</div>;
  };
  return (
    <>
      <Seo title={"Status | Republic City"} />
      <RenderStatus />
    </>
  );
}

export default Status;
