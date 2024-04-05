import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Bgimage from "./components/Bg-Image/Bg-Image";
import Products from "./components/Products/Products";
export default function Home() {
  return (
    <>
      <Navbar />
      <Bgimage />
      <Products/>
    </>
  );
}
