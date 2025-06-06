import React from "react";
import Header from "./header/page";
import Slider from "./slider/page";
import Filter from "./filter/page";
import Cards from "./cards/page";
import Comments from "./comments/page";
import Footer from "./footer/page";

function page() {
  return (
    <div className=" mt-3">
      <Header />
      <Slider />
      <Filter />
      <Cards />
      <Comments />
      <Footer />
    </div>
  );
}

export default page;
