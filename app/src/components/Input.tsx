
type InputProps = {
    text: string
    placeholder?: string
    value?: string | number
    onChange?: (value: string) => void
}

export default function Input({ text, placeholder, value, onChange }: InputProps) {
    return (
        <div className="grid">
            <label>{text}</label>
            <input 
                type="number" 
                placeholder={placeholder} 
                value={value ?? ""}
                onChange={(e) => onChange?.(e.target.value)}
                className="border border-[#CBB5B5] rounded h-[35px] focus:border-[#522727] focus:outline-none px-2"
            />
        </div>
    )
}