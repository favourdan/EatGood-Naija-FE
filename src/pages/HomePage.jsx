// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../layouts/Header";
import Hero from "../components/homepage/Hero";
import Menu from "../components/homepage/Menu";
import Services from "../components/homepage/Services";
import Footer from "../layouts/Footer";

const HomePage = () => {
  return (
    <div className="my-0 mx-auto py-0 px-16 text-center">
      <Header />
      <Hero />
      <Services />
      <Menu />
      <Footer />
    </div>
  );
};

export default HomePage;
