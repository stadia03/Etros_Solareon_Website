import React from "react";
import { quotes } from "../assets";
import styles from "../style";
const Project = ({ description, members, name, title, img, date }) => {
  return ( 
    <div className="flex justify-start items-start flex-col px-10 py-12 rounded-[20px] max-w-full md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex items-start flex-row">
        <img
          src={img}
          alt={name}
          className="w-[140px] h-[140px]  rounded-md"
        />
        <div className="flex flex-col ml-4 items-start h-full justify-start  ">
          <h4 className="font-poppins my-2 font-semibold text-[20px] leading-[32px] text-white">
            {title}
          </h4>
          <p className="font-poppins text-left font-normal text-[16px] leading-[24px] text-white mb-2">
            {date}
          </p>
          <p className="font-poppins text-left font-normal text-[16px] leading-[24px] text-white">
            {description}
          </p>

        
         
        </div>
      </div>
    </div>
  );
};

export default Project;