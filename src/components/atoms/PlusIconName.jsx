import React from "react";
import { PlusIcon } from "@phosphor-icons/react";

const PlusIconName = ({ submit }) => {
  return (
    <>
      <PlusIcon
        onClick={submit}
        size={33}
        className="
         absolute right-3 top-1/2 -translate-y-1/2 
             text-black bg-[#9caf98] rounded-full p-1 
             cursor-pointer hover:bg-[#7f8f78] transition
        "
      />
    </>
  );
};

export default PlusIconName;
