
type SelectProps = {
    text: string
    placeholder?: string
    options?: { value: string; label: string }[]
    value?: string
    onChange?: (value: string) => void
}

export default function Select({ text, placeholder, options = [], value, onChange }: SelectProps) {
    return (
        <div className="grid">
            <label>{text}</label>
            <select 
                value={value ?? ""} 
                onChange={(e) => onChange?.(e.target.value)}
                className="border border-[#CBB5B5] rounded h-[35px] focus:border-[#522727] focus:outline-none px-2">
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}