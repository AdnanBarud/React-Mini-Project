import React from "react";

const PrimaryBtn = ({text='click me', onclick}) => {
  return (
    <button
    onClick={onclick}
     className="bg-[#D01C28] pt-[6px] pr-[16px] pb-[6px] pl-[16px] text-white">
      <span >{text}</span>
    </button>
  );
};

export default PrimaryBtn;
