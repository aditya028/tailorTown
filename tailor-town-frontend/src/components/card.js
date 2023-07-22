import suitImg from "../assets/suit-img.png";

export default function Card() {
  return (
    <div className="flex flex-col p-2  border-[#696969] rounded-lg cursor-pointer hover:shadow-round hover:shadow-[#696969]">
      <img src={suitImg} alt="image" />
      <div className="flex flex-row justify-between mt-3">
        <h1 className="text-[Poppins] text-[20px] font-semibold">
          Tailor Name
        </h1>
        <div className="bg-[#24963F] px-2 py-1 font-semibold text-white rounded-lg">
          ⭐ NA
        </div>
      </div>
      <p className="text-[#696969] my-2 text-[18px]">
        Desc about tailor .........{" "}
      </p>
      <div className="flex flex-row justify-between text-[20px] font-[Poppins] ">
        <h1>₹ NA</h1>
        <h1>In 4 Days</h1>
      </div>
      <hr className="my-5" />
      <p className="text-[#696969] text-[14px] ">
        20+ orders placed from here recently
      </p>
    </div>
  );
}
