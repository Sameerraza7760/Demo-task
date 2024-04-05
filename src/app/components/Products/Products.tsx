"use client";
import useHotelDetail from "@/app/hooks/useHotelData";
import { hoteLDetail } from "@/app/types/type.hotelDetail";
import { ToastContainer } from "react-toastify";
import Card from "../Card/Card";
function Products() {
  const { hotels } = useHotelDetail();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Added CheckIns
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {" "}
          {hotels.map((item: hoteLDetail, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </div>{" "}
        <ToastContainer />
      </div>
    </section>
  );
}

export default Products;
