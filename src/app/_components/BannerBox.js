import jblImage from "@/../public/jbl.png";
import Image from "next/image";
import CircularTimer from "./CircularTimer";

function BannerBox() {
  return (
    <div className="grid grid-cols-12 px-14 py-20 bg-black text-white">
      <div className="col-span-5  ">
        <div className="text-buttonSecondary mb-4">Categories</div>
        <h4 className="text-[46px] font-[500] tracking-wider mb-4">
          Enhance Your <br />
          Music Experience
        </h4>
        <CircularTimer />

        <button className="w-fit px-12 py-4 bg-buttonSecondary rounded-sm">
          Buy Now!
        </button>
      </div>
      <div className="col-span-7 flex justify-center ">
        <Image
          src={jblImage}
          alt="speaker"
          className="drop-shadow-[0_0px_80px_rgba(255,255,255,0.45)] "
        />
      </div>
    </div>
  );
}

export default BannerBox;
