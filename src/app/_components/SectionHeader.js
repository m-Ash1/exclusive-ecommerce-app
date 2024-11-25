function SectionHeader({children}) {
    return (
        <div className="flex gap-4 items-center text-red-500 font-bold mb-5">
            <div className="rippon h-10 w-5 rounded-md bg-red-500"></div>
            {children}
        </div>
    )
}

export default SectionHeader
