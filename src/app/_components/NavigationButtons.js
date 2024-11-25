import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import NavButton from "./NavButton";

function NavigationButtons() {
  return (
    <div className="flex gap-3">
      <NavButton>
        <ArrowLeftIcon width={24} height={24} />
      </NavButton>
      <NavButton>
        <ArrowRightIcon width={24} height={24} />
      </NavButton>
    </div>
  );
}

export default NavigationButtons;
