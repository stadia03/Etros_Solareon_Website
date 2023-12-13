import React from "react";
import { quotes } from "../assets";

const Team = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between items-center flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex items-center flex-col">
        <img
          src={img}
          alt={name}
          className="w-[140px] h-[140px] rounded-full"
        />
        <div className="flex flex-col  ">
          <h4 className="font-poppins my-2 font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
