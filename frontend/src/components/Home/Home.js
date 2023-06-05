import React from "react";

import Header from "../Layout/Header";
import Hero from "../Route/Hero/Hero";
import Categories from "../Route/Categories/Categories";
import BestDeals from "../Route/BestDeals/BestDeals";
import FeaturedProducts from "../Route/FeaturedProducts/FeaturedProducts";
import Events from "../Events/Events";
import Sponsored from "../Route/Sponsored";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <Sponsored />
      <Footer />
    </>
  );
};

export default Home;
