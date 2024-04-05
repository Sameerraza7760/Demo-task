"use client";
import React, { useState } from "react";
import "./style.css";
import Text from "@/assets/text.png";
import Image from "next/image";

import ModalComponent from "../Modal/AddHotalModal";
function Bgimage() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="bg-image-Container w-full flex justify-center">
      <div className="bg-image-innerContainer w-[95%] flex rounded-lg shadow-md">
        <div className="text-left p-5 mt-[80px]  ml-5 ">
          <Image
            src={Text}
            alt=""
            width={100}
            height={100}
            className="w-[272px] h-[42px]s"
          />
          <p className="text-white mt-4 font-sans text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            harum sed minima animi
          </p>
          <button
            className="bg-[#7B5AFF] mt-4 w-[140px] text-white  h-[44px] rounded-[20px]"
            onClick={handleOpenModal} // Open the modal when button is clicked
          >
            Add Check In
          </button>
        </div>
      </div>
    
      <ModalComponent open={openModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default Bgimage;
