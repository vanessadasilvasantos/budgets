type CheckboxProps = {
	text: string
	checked?: boolean
	defaultChecked?: boolean
	onChange?: (checked: boolean) => void
	disabled?: boolean
}

export default function Checkbox({
	text,
	checked,
	defaultChecked,
	onChange,
	disabled = false,
}: CheckboxProps) {
	return (
		<label className="flex items-center gap-2 text-[#522727]">
			<input
				type="checkbox"
				checked={checked}
				defaultChecked={defaultChecked}
				onChange={(event) => onChange?.(event.target.checked)}
				disabled={disabled}
				className="h-4 w-4 border border-[#CBB5B5] rounded accent-[#A07B7B] disabled:cursor-not-allowed"
			/>
			<span>{text}</span>
		</label>
	)
}
