function ActionButton({ children }) {
    return (
        <div className="text-white px-8 py-3 bg-red-500 text-center w-fit cursor-pointer">
            {children}
        </div>
    )
}

export default ActionButton
