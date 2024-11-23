import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "./Logo";
function Navbar() {
  return (
    <nav className="bg-white text-black">
      <div className="container mx-auto mt-4 py-4 flex justify-between">
        <Logo />
        <ul className="flex gap-6 items-center text-lg ">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="contact">
            Contact
          </Link>
          <Link className="hover:underline" href="about">
            About
          </Link>
          <Link className="hover:underline" href="signup">
            Sign Up
          </Link>
        </ul>
        <div className="flex gap-5">
          <div className="search bg-bgSecondary flex py-2 px-4">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="outline-none bg-transparent"
            />
            <MagnifyingGlassIcon width={24} />
          </div>

          <div className="flex gap-3">
            <HeartIcon width={24} className="hover:cursor-pointer" />
            <ShoppingCartIcon width={24} className="hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
