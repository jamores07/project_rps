import React from "react";
import Modal from "./Modal";

function Footer() {
  return (
    <div className="relative w-screen ">
      <div>
        <p className="text-center text-sm">
          Created By{" "}
          <a href="" className="text-white">
            John Amores
          </a>
          .
        </p>
      </div>
      <div className="absolute border-2 border-gray-400 rounded-3xl px-6 py-3 -top-[70px] right-4 text-gray-400 text-xl cursor-pointer hover:text-gray-100 mt-4 mobile:scale-75 sm:scale-100">
        <Modal />
      </div>
    </div>
  );
}

export default Footer;
