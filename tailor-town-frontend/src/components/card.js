// import img1 from "../assets/tailorDP/1.jpg";
import img2 from "../assets/tailorDP/2.jpg";
import img3 from "../assets/tailorDP/3.jpg";
import img4 from "../assets/tailorDP/4.jpg";
import img5 from "../assets/tailorDP/5.jpg";

export default function Card({ tailor }) {
  const imgArr = [img2, img3, img4, img5];
  const randomNumber = Math.floor(Math.random() * 4);
  return (
    <div className="flex flex-col p-2  border-[#696969] rounded-lg cursor-pointer hover:shadow-round hover:shadow-[#696969]">
      <img src={imgArr[randomNumber]} alt="image" height={300} />
      <div className="flex flex-row justify-between mt-3">
        <h1 className="text-[Poppins] text-[20px] font-semibold">
          {tailor.name}
        </h1>
        <div className="bg-[#24963F] px-2 py-1 font-semibold text-white rounded-lg">
          ⭐ {randomNumber + 2}
        </div>
      </div>
      <p className="text-[#696969] my-2 text-[18px]">{tailor.description}</p>
      <div className="flex flex-row justify-between text-[20px] font-[Poppins] ">
        <h1>₹ {tailor.price}</h1>
        <h1>In 4 Days</h1>
      </div>
      <hr className="my-5" />
      <p className="text-[#696969] text-[14px] ">
        {tailor.orders} orders placed from here recently
      </p>
    </div>
  );
}
