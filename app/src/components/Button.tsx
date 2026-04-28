type ButtonProps = {
    onClick: () => void
    text: string
    variant?: "principal" | "secundario"
}

export default function Button({ onClick, text, variant = "principal" }: ButtonProps) {
    const variantClasses =
        variant === "secundario"
            ? "bg-[#E8E2E2] text-[#522727] hover:bg-[#CBB5B5]"
            : "bg-[#A07B7B] text-white hover:bg-[#522727]"

    return (
        <button onClick={onClick} className={`${variantClasses} rounded h-[35px] cursor-pointer font-bold w-[100%] transition-colors duration-300`}>
            {text}
        </button>
    )
}