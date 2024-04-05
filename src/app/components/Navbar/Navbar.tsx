"use client";
import React from "react";
// import Avatar from "@mui/material/Avatar";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";
import NotficationIcon from "@/assets/Vector.png";
import informIcon from "@/assets/Vector (2).png";
import Image from "next/image";
import Avatar from "@/assets/Avatar.png";
function Navbar() {
  return (
    <div className="navbarContainer w-full mb-3 p-5">
      <div className="inner-Container w-[95%] mx-auto bg-white flex justify-between p-5 shadow-md rounded-full">
        {" "}
        <div>
          <button className="w-[45px] h-[45px]  text-white bg-[#7B5AFF]">
            Logo
          </button>
        </div>{" "}
        <div className="left-inner-Container flex gap-3 cursor-pointer">
          <button className="bg-[#7B5AFF] w-[100px] sm:w-[120px] text-white font-serif h-[40px] rounded-[20px]">
            Feedback
          </button>{" "}
          <Image
            src={NotficationIcon}
            alt=""
            style={{ height: 27, width: 24, marginTop: 5 }}
          />
          <Image
            src={informIcon}
            alt=""
            style={{ height: 27, width: 24, marginTop: 5 }}
          />
          <Image
            src={Avatar}
            alt=""
            style={{ height: 35, width: 55, marginTop: 5 }}
          />
        </div>{" "}
      </div>
    </div>
  );
}

export default Navbar;
