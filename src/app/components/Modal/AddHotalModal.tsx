import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button, CircularProgress } from "@mui/material";
import { hoteLDetail } from "@/app/types/type.hotelDetail";
import UploadImg from "@/assets/Upload-Drag.png";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import useHotelDetail from "@/app/hooks/useHotelData";
import { uploadImage } from "@/app/utills/utills.uploadImage";
import moment from "moment";
interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ open, handleClose }) => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hotelDetail, setHotelDetail] = useState<hoteLDetail>({
    owner: "",
    BookedDate: "",
    noOfrooms: 0,
    noOfGuests: 0,
    hotelImage: "",
  });
  const { setHotelData } = useHotelDetail();
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddButtonClick = async () => {
    setLoading(true);
    const hotelImage = await uploadImage(file);
    const completeHotelDetail = {
      ...hotelDetail,
      hotelImage,
    };
    if (
      !hotelDetail.owner ||
      !hotelDetail.BookedDate ||
      !hotelDetail.noOfrooms ||
      !hotelDetail.noOfGuests
    ) {
      alert("Please fill in all fields before submitting.");
      setLoading(false);
      return;
    }
    await setHotelData(completeHotelDetail);
    setLoading(false);
    setHotelDetail({
      owner: "",
      BookedDate: "",
      noOfrooms: 0,
      noOfGuests: 0,
      hotelImage: "",
    });
  };

  return (
    <div className="z-50">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "90%",
            height: "90%",
            maxWidth: "600px",
            maxHeight: "600px",
            overflow: "auto",
            bgcolor: "white",
            borderRadius: "8px",
            padding: "20px",
          }}
        >
          {" "}
          <Button
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <CloseIcon />
          </Button>
          <div className="border-b border-dotted border-purple-solid p-4">
            <h2 id="parent-modal-title">Add Checkin</h2>
          </div>
          <TextField
            id="room-id"
            label="No of Rooms"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            type="number"
            className="border-b border-purple-solid mb-4"
            value={isNaN(hotelDetail.noOfrooms) ? "" : hotelDetail.noOfrooms}
            onChange={(e) =>
              setHotelDetail({
                ...hotelDetail,
                noOfrooms: parseInt(e.target.value),
              })
            }
          />
          <TextField
            required
            id="enter-date"
            label="Booked Date"
            variant="outlined"
            fullWidth
            autoComplete="off"
            margin="normal"
            size="small"
            type="date"
            className="border-b border-purple-solid mb-4"
            value={moment(hotelDetail.BookedDate).format("YYYY-MM-DD")} // Format BookedDate using Moment.js
            onChange={(e) =>
              setHotelDetail({
                ...hotelDetail,
                BookedDate: e.target.value,
              })
            }
          />
          <TextField
            required
            id="guests"
            label="No of Guests"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            type="number"
            autoComplete="off"
            className="border-b border-purple-solid mb-4"
            value={hotelDetail.noOfGuests}
            onChange={(e) =>
              setHotelDetail({
                ...hotelDetail,
                noOfGuests: parseInt(e.target.value),
              })
            }
          />
          <TextField
            required
            id="owner"
            label="Owner"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            className="border-b border-purple-solid mb-4"
            value={hotelDetail.owner}
            onChange={(e) =>
              setHotelDetail({ ...hotelDetail, owner: e.target.value })
            }
          />
          <label
            htmlFor="image-file"
            style={{
              display: "inline-block",
              borderRadius: "8px",
              padding: "8px",
              cursor: "pointer",
              height: "200px",
              width: "100%",
            }}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  height: "90%",
                  width: "100%",
                  display: "block",
                }}
                className="border border-purple-solid"
              />
            ) : (
              <Image
                src={UploadImg}
                alt=""
                style={{
                  height: "90%",
                  width: "100%",
                  display: "block",
                }}
              />
            )}
          </label>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="image-file"
            onChange={handleFileInputChange}
            type="file"
            className="border border-purple-solid"
          />
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded absolute bottom-4 right-4"
            onClick={handleAddButtonClick}
          >
            {loading ? <CircularProgress /> : "Add"}
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
