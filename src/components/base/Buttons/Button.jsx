function Button({ children, variant = "primary", size = "md", onClick }) {
    const variants = {
        primary: "bg-red-600 hover:bg-red-700 text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
        danger: "bg-red-800 hover:bg-red-900 text-white",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`
                rounded-lg
                font-medium
                transition-colors
                ${variants[variant]}
                ${sizes[size]}
            `}
        >
            {children}
        </button>
    );
}

export default Button;