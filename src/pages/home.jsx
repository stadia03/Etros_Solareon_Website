import React from "react";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
  Carousel
  
} from "../components";
import styles from "../style";
const Home = () => {
  return (
    <div>
      {" "}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          
          <Carousel/>

          <Business />

          {/* <Gallery /> */}
          {/* <Testimonials /> */}
          <Clients />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
