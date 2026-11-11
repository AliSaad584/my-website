const FormInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = true
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default FormInput;