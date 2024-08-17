import React from "react";

const RoundedButtonSM = ({ active, text, onButtonClick, icon }) => {
  return (
    <div
      className={`hover:bg-opacity-70 transition-all cursor-pointer inline-block ${
        active
          ? " bg-[#a3a2a2] text-[#484848]"
          : "bg-[#efefef] text-[#484848] border border-[#3b3b3b]"
      } rounded-full w-6 h-6`}
      onClick={onButtonClick}
    >
      {text}
      {icon}
    </div>
  );
};

export default RoundedButtonSM;
