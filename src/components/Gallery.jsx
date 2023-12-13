import React from "react";
import styles from "../style";
import { gallery } from "../constants";
const Gallery = () => {
  return (
    <div>
      {" "}
      <h2 className={styles.heading2}>
        Life at
        <span className="text-gradient"> Etros Solareon Racing </span>
        {gallery.map((card) => (
          <div
            key={card.id}
            className="flex flex-wrap sm:justify-center justify-center w-screen feedback-contrainer relative z-[1]"
          >
            <img src={card.link} className="w-full" alt="" />
          </div>
        ))}
      </h2>
    </div>
  );
};

export default Gallery;
