import logo from "../assets/logo.png";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black ">
      <div className="flex md:flex-row md:justify-between justify-center gap-5 flex-col items-center mx-auto p-10  max-w-[1600px] w-[100%]">
        <img className="h-[60px] " src={logo} alt="logo" />
        <p className="text-white max-w-[500px]">
          Our mission is to revolutionize the way customers connect with tailors
          by providing a convenient and efficient online platform. We strive to
          empower customers to find the perfect tailor for their unique needs,
          ensuring exceptional quality, affordability, and convenience
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-5 justify-between items-center mx-auto p-5 max-w-[1600px] w-[100%]">
        <p className="text-white max-w-[500px]">© 2023 Tailor Town</p>
        <div className="flex flex-row items-center gap-3">
          <p className="text-white max-w-[500px]">Connect Us - </p>
          <BsFacebook className="cursor-pointer" color="white" />
          <BsTwitter className="cursor-pointer" color="white" />
          <BsInstagram className="cursor-pointer" color="white" />
          <BsGithub className="cursor-pointer" color="white" />
        </div>
      </div>
    </div>
  );
}
