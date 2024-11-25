import { ChevronRightIcon } from "@heroicons/react/24/outline";

function SideNavigation() {
  return (
    <ul className="col-span-2 flex flex-col gap-5 text-lg font-[400] border-e-[1px] pt-10">
      <li className="flex gap-3 cursor-pointer">
        Woman&apos;s Fashion <ChevronRightIcon width={20} />
      </li>
      <li className="flex gap-3 cursor-pointer">
        Men&apos;s Fasion <ChevronRightIcon width={20} />
      </li>
      <li>Electronics</li>
      <li>Home & Lifestyle</li>
      <li>Medicine</li>
      <li>Sports & Outdoor</li>
      <li>Baby&apos;s & Toys</li>
      <li>Groc«ies & Pets</li>
      <li>Health & Beauty</li>
    </ul>
  );
}

export default SideNavigation;
