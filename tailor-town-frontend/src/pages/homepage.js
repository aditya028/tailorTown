import Footer from "../components/footer";
import Navbar from "../components/navbar";
import mainImage from "../assets/main.jpg";
import Card from "../components/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [tailors, setTailors] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/tailors", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTailors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-[1500px] mx-auto p-[30px]">
        <div className="flex flex-col gap-5 justify-center order-1">
          <p className="font-[Poppins] md:text-[50px] text-[30px] font-semibold ">
            Choose Your Tailor and Get Cloths ready
          </p>
          <Link
            to="/register"
            className="flex justify-center p-3 bg-black text-white font-semibold w-[180px] hover:bg-[#E7E7E7] hover:text-black px-3 rounded-lg ease-in-out duration-500"
          >
            Register your shop
          </Link>
        </div>
        <img className="md:order-2 " src={mainImage} alt="Image" />
      </div>
      <div className="max-w-[1500px] mx-auto px-10 md:my-10 my-0 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1  gap-4">
        {tailors?.map((tailor, id) => (
          <Card key={id} tailor={tailor} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
