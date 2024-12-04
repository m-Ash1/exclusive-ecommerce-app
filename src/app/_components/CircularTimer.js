function CircularTimer() {
  return (
    <div className="flex gap-4 text-black font-[600] mb-10">
      <div className="w-16 h-16 bg-white rounded-full relative items-center justify-center flex flex-col">
        <div>23</div>
        <div className="text-xs">Hours</div>
      </div>
      <div className="w-16 h-16 bg-white rounded-full relative items-center justify-center flex flex-col">
        <div>05</div>
        <div className="text-xs">Days</div>
      </div>
      <div className="w-16 h-16 bg-white rounded-full relative items-center justify-center flex flex-col">
        <div>59</div>
        <div className="text-xs">Minutes</div>
      </div>
      <div className="w-16 h-16 bg-white rounded-full relative items-center justify-center flex flex-col">
        <div>35</div>
        <div className="text-xs">Seconds</div>
      </div>
    </div>
  );
}

export default CircularTimer;
