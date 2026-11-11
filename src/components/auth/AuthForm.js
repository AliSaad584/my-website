import { useState } from "react";
import FormInput from "../common/FormInput";
import Button from "../common/Button";

const AuthForm = ({ title, buttonText, onSubmit, isSignUp = false }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="general-form auth-form" onSubmit={handleSubmit}>

            <h2>{title}</h2>

            {isSignUp && (
                <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                />
            )}

            <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
            />

            <FormInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
            />

            <Button type="submit">{buttonText}</Button>

        </form>
    );
};

export default AuthForm;