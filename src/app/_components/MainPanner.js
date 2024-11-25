import appleImage from "@/../public/apple.webp";
import phoneImage from "@/../public/banner.webp";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function MainPanner() {
  return (
    <div className="col-span-10 pt-10 pl-10 text-white">
      <div className="box bg-bgPrimary h-full grid grid-cols-2 p-5">
        <div className="banner-body pt-14 px-20">
          <div className="head  flex gap-6 items-center text-xl mb-4">
            <Image src={appleImage} alt="apple" width={50} />
            IPhone 14 Series
          </div>
          <p className="text-[3em] mb-4">Up to 10% off Voucher</p>
          <div className="flex gap-3 items-center">
            <button className=" text-white  border-b-2 text-lg">Shop Now</button>
            <ArrowRightIcon width={24} />
          </div>
        </div>
        <div className="relative">
          <Image src={phoneImage} alt="phone" fill className="aspect-square" />
        </div>
      </div>
    </div>
  );
}

export default MainPanner;
