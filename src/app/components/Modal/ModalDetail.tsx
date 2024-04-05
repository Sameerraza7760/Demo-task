import { hoteLDetail } from "@/app/types/type.hotelDetail";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Modal } from "@mui/material";
import moment from "moment";
interface ModalProps {
  open: boolean;
  handleClose: () => void;
  detail: hoteLDetail | null;
}
const ModalDetail: React.FC<ModalProps> = ({ open, handleClose, detail }) => {
  return (
    <div>
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
            <h2 id="parent-modal-title">Detail</h2>
          </div>{" "}
          <div className="detail w-[90%] mx-auto mt-5 p-3 grid gap-4 grid-cols-1 md:grid-cols-2 ">
            {" "}
            <div className="grid gap-4 ">
              {" "}
              <div className="flex gap-5">
                {" "}
                <label htmlFor="">BookingId</label>{" "}
                <input
                  type="text"
                  className="border-gray"
                  style={{ borderWidth: "1px", width: "30%" }}
                  value={detail?.hotelId?.slice(0, 5)}
                  readOnly
                />
              </div>{" "}
              <div className="flex gap-5">
                {" "}
                <label htmlFor="">Rooms</label>{" "}
                <input
                  type="number"
                  className="border-gray"
                  style={{ borderWidth: "1px", width: "30%" }}
                  value={detail?.noOfrooms}
                  readOnly
                />
              </div>{" "}
              <div className="flex gap-5">
                {" "}
                <label htmlFor="">No Of Guests</label>{" "}
                <input
                  type="number"
                  className="border-gray"
                  style={{ borderWidth: "1px", width: "30%" }}
                  value={detail?.noOfGuests}
                  readOnly
                />
              </div>{" "}
              <div className="flex gap-5">
                {" "}
                <label htmlFor="">Booked Date</label>{" "}
                <p>
                  {detail?.BookedDate
                    ? moment(detail.BookedDate).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )
                    : ""}
                </p>
              </div>
            </div>
            <div className="imageDetail h-[200px]">
              <img
                src={detail?.hotelImage}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>{" "}
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded absolute bottom-4 right-4"
            onClick={handleClose}
          >
            OK
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDetail;
