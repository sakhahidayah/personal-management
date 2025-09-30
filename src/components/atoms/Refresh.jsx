import React from "react";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/ssr";

const Refresh = ({ refresh }) => {
  return (
    <>
      <div className="  justify-end px-2 flex">
        <ArrowsClockwiseIcon onClick={refresh} size={35} className="font-bold hover:text-black transition-all duration-300  right-2 top-1 cursor-pointer px-2 py-1.5 rounded-full bg-[#9caf98]" />
      </div>
    </>
  );
};

export default Refresh;
