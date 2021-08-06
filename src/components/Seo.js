import React from "react";
import { Helmet } from "react-helmet";

function Seo({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? title : "Ayo main Roleplay! | Republic City"}</title>
    </Helmet>
  );
}

export default Seo;
