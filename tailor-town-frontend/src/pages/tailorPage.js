import Navbar from "../components/navbar";
import bgImg from "../assets/background.jpg";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import { BsEmojiSmile, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa";

export default function TailorPage() {
  const { data } = useParams();
  const tailor = JSON.parse(decodeURIComponent(data));

  return (
    <>
      <Navbar />
      <div className="h-[100vh] relative">
        <img src={bgImg} alt="img" />
        <div className="absolute flex flex-col justify-center items-center right-[100px] top-[100px] w-[500px] h-[500px] opacity-60 bg-black">
          <h1 className="text-white text-center text-[50px] font-semibold mx-[30px] ">
            {tailor.name}
          </h1>
          <p className="text-white text-center text-[20px] font-thin mx-[30px] my-[20px]">
            Where timeless elegance meets bespoke craftsmanship. Personalized
            consultations, exquisite fabrics, and masterful tailoring, ensuring
            every garment embodies individuality and sophistication. Step into a
            world of sartorial artistry and elevate your style to new heights
          </p>
          <button className="bg-white w-[150px] p-2 rounded-lg text-[20px] font-semibold  hover:bg-black hover:text-white">
            Place Order
          </button>
        </div>
        <div className="text-center max-w-[550px] my-5 mx-auto">
          <h1 className="text-[#d8aa59] font-bold text-[36px]">About Us </h1>
          <p>{tailor.description}</p>
        </div>
        <div className="bg-black flex justify-between opacity-70 px-[200px] py-[50px]">
          <div className="flex flex-col items-center">
            <div className="bg-[#F9903A] w-[70px] h-[70px] rounded-[50%] flex justify-center items-center z-[0]">
              <BsEmojiSmile className="text-[30px] text-white" />
            </div>
            <h1 className="text-[#D8AA59] text-[20px] gap-2 font-semibold my-2">
              {tailor?.orders}120
            </h1>
            <h1 className="text-white text-[20px] gap-y-[5px] font-normal">
              Happy Customers
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F9903A] w-[70px] h-[70px] rounded-[50%] flex justify-center items-center z-[0]">
              <MdLocationOn className="text-[30px] text-white" />
            </div>
            <h1 className="text-[#D8AA59] text-[20px] gap-2 font-semibold my-2">
              40
            </h1>
            <h1 className="text-white text-[20px] gap-y-[5px] font-normal">
              Location Accuired
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F9903A] w-[70px] h-[70px] rounded-[50%] flex justify-center items-center z-[0]">
              <FaBlackTie className="text-[30px] text-white" />
            </div>
            <h1 className="text-[#D8AA59] text-[20px] gap-2 font-semibold my-2">
              {tailor?.orders}20
            </h1>
            <h1 className="text-white text-[20px] gap-y-[5px] font-normal">
              Suits Designed
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#F9903A] w-[70px] h-[70px] rounded-[50%] flex justify-center items-center z-[0]">
              <BsPersonFill className="text-[30px] text-white" />
            </div>
            <h1 className="text-[#D8AA59] text-[20px] gap-2 font-semibold my-2">
              {tailor?.employees}20
            </h1>
            <h1 className="text-white text-[20px] gap-y-[5px] font-normal">
              Smart Employees
            </h1>
          </div>
        </div>
        <div className="text-center max-w-[550px] my-5 mx-auto">
          <h1 className="text-[#d8aa59] font-bold text-[36px]">
            Featured Items{" "}
          </h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complet.
          </p>
        </div>
        <div className="flex gap-5 max-w-[1000px] mx-auto my-8">
          <div className="flex flex-col gap-2 cursor-pointer ">
            <img src={one} alt="img" />
            <h1 className="text-[20px] font-semibold mx-5">
              Modern 2px silver suit
            </h1>
            <p className="text-[16px] font-normal mx-5">₹ 800</p>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <img src={two} alt="img" />
            <h1 className="text-[20px] font-semibold mx-5">Men's blazzer</h1>
            <p className="text-[16px] font-normal mx-5">₹ 800</p>
          </div>
          <div className="flex flex-col gap-2 cursor-pointer">
            <img src={three} alt="img" />
            <h1 className="text-[20px] font-semibold mx-5">V neck Suit</h1>
            <p className="text-[16px] font-normal mx-5">₹ 800</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
