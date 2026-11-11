const Button = ({ children, onClick, type = "button", className = "" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`nf-button ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;