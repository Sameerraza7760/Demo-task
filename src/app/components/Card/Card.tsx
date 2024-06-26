import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { hoteLDetail } from "@/app/types/type.hotelDetail";
import useHotelDetail from "@/app/hooks/useHotelData";
import ModalDetail from "../Modal/ModalDetail";
import moment from "moment";
interface CardProps {
  item: hoteLDetail;
  index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const [detail, setDetail] = useState<hoteLDetail | null>(null); // Initialize detail state with null
  const { fetchHotelDetails } = useHotelDetail();

  const handleOpenModal = async (hotelId: string | undefined) => {
    if (hotelId) {
      const detail = await fetchHotelDetails(hotelId);
      if (detail) {
        setDetail(detail);
        setOpenModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div key={index} className="xl:w-1/4 md:w-1/2 p-4 relative">
      <div
        className="bg-gray-100 p-6 rounded-lg cursor-pointer shadow-lg"
        onClick={() => handleOpenModal(item.hotelId)}
      >
        <div className="relative" style={{ height: "200px" }}>
          <button className="absolute top-3 right-2 bg-[#7B5AFF] w-[100px] sm:w-[120px] text-white font-serif h-[40px] rounded-[20px] z-10">
            Checked In
          </button>
          <img
            className="h-full w-full rounded-3xl object-cover object-center mb-6"
            src={item.hotelImage}
            alt="content"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          CheckIn Name
        </h2>{" "}
        <h3 className="text-lg text-gray-500 font-medium title-font mb-2">
          {item?.BookedDate
            ? moment(item.BookedDate).format("MMMM Do YYYY, h:mm:ss a")
            : ""}
        </h3>
        <div className="flex gap-3">
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar-image.jpg"
            style={{
              fontSize: "1rem",
              color: "gray",
              padding: "2px",
            }}
          />
          <h1 className="font-bold mt-2">owner:{item.owner}</h1>
        </div>
      </div>

      <ModalDetail
        open={openModal}
        handleClose={handleCloseModal}
        detail={detail}
      />
    </div>
  );
};

export default Card;
