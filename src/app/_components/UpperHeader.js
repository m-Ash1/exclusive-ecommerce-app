import Link from "next/link";

function UpperHeader() {
  return (
    <header className="w-full bg-bgPrimary text-primary  ">
      <div className="container flex justify-between mx-auto py-3">
        <div></div>
        <div className="cta">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link rel="stylesheet" href="/" className="pl-5 underline font-bold">
            Shop now
          </Link>
        </div>
        <select className="bg-bgPrimary cursor-pointer outline-none">
          <option value="english">English</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>
    </header>
  );
}

export default UpperHeader;
