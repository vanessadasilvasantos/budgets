type ModalProps = {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg w-full max-w-[500px] mx-4 p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    {title && <h2 className="text-[#522727] font-bold text-lg">{title}</h2>}
                    <button
                        onClick={onClose}
                        className="ml-auto text-[#A07B7B] hover:text-[#522727] cursor-pointer text-xl leading-none"
                    >
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}
