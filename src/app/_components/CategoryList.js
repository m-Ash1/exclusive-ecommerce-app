import {
  CameraIcon,
  ClockIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PhoneIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

const sections = [
  {
    id: 1,
    name: "Phones",
    icon: <PhoneIcon width={60} height={60} />,
  },
  {
    id: 2,
    name: "Computers",
    icon: <ComputerDesktopIcon width={60} height={60} />,
  },
  {
    id: 3,
    name: "Smart Watches",
    icon: <ClockIcon width={60} height={60} />,
  },
  {
    id: 4,
    name: "Camera",
    icon: <CameraIcon width={60} height={60} />,
  },
  {
    id: 5,
    name: "Headphones",
    icon: <SpeakerWaveIcon width={60} height={60} />,
  },
  {
    id: 6,
    name: "Gaming",
    icon: <GlobeAltIcon width={60} height={60} />,
  },
];
function CategoryList() {
  return (
    <div className="grid grid-cols-6 gap-4 mt-20">
      {sections.map((section) => (
        <div
          key={section.id}
          className="flex items-center justify-center flex-col py-12 px-10 border-2 border-grey-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
        >
          {section.icon}
          <p className="mt-4 text-lg font-semibold ">{section.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
