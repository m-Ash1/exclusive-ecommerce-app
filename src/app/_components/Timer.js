function Timer() {
  return (
    <ul className="grid grid-cols-7 item">
      <li>
        <div className="text-xs font-bold">Days</div>
        <div className="text-4xl font-[500] tracking-wide">03</div>
      </li>
      <span className="text-red-500 text-3xl font-bold flex justify-center items-center">
        :
      </span>
      <li>
        <div className="text-xs font-bold">Hours</div>
        <div className="text-4xl font-[500] tracking-wide">23</div>
      </li>
      <span className="text-red-500 text-3xl font-bold flex justify-center items-center">
        :
      </span>
      <li>
        <div className="text-xs font-bold">Minutes</div>
        <div className="text-4xl font-[500] tracking-wide">19</div>
      </li>
      <span className="text-red-500 text-3xl font-bold flex justify-center items-center">
        :
      </span>
      <li>
        <div className="text-xs font-bold">Seconds</div>
        <div className="text-4xl font-[500] tracking-wide">56</div>
      </li>
    </ul>
  );
}

export default Timer;
