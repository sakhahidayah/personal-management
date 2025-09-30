import { WarningIcon } from "@phosphor-icons/react";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="card-default  text-white flex gap-3 justify-center items-center flex-col font-bold w-2/3 border p-5 rounded-lg">
        <WarningIcon size={60} />
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-2xl ">Not Found Page 404</p>
          <p className="font-thin italic text-lg">This Page doesn't exist</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
