import React from "react";
import { PlusIcon } from "@phosphor-icons/react";
const PlusIconAdd = ({ submit }) => {
  return (
    <>
      <PlusIcon onClick={submit} size={33} className="absolute font-bold hover:text-black transition-all duration-300  right-2 top-1 cursor-pointer px-2 py-1.5 rounded-full bg-[#9caf98]" />
    </>
  );
};

export default PlusIconAdd;
