import React from "react";
import styles from "../style";
import Button from "./Button";

const Mini_CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading4}>Elevate Your Brand with by parterning with us!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Race to the top with our college team! Sponsorship opportunities that fuel your brand's image, putting you on the fast track to visibility and recognition.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSek1vhKS_ViNfcHP6nEXElLIW4vWH8YJjNGJAN12Zh6Iw9UTg/viewform" target ="_blank">
          <Button />
        </a>
      </div>
    </section>
  );
};

export default Mini_CTA;
