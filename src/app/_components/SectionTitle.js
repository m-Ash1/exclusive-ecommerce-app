
function SectionTitle({ title, render, children }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-20">
        <h3 className="text-[42px] font-[500] tracking-wide flex items-center">
          {title}
        </h3>
        {children}
      </div>
      {render}
    </div>
  );
}

export default SectionTitle;
