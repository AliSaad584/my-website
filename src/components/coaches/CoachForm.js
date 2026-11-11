
import { useState, useContext } from "react";
import { CoachContext } from "../../context/CoachContext";
import FormInput from "../common/FormInput";
import Button from "../common/Button";

const CoachForm = ({ onSuccess }) => {
    const { addCoach } = useContext(CoachContext);

    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        experience: "",
        phoneNumber: "",
        image: ""
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

        addCoach({
            ...formData,
            image: formData.image ||
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        });

        setFormData({
            name: "",
            specialty: "",
            experience: "",
            phoneNumber: "",
            image: ""
        });

        if (onSuccess) onSuccess();
    };

    return (
        <form className="general-form" onSubmit={handleSubmit}>
            <h2>JOIN OUR TEAM</h2>

            <FormInput
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <FormInput
                label="Specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                placeholder="Example: Cardio"
            />

            <FormInput
                label="Experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Example: 3 years"
            />

            <FormInput
                label="WhatsApp Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Example: 96170123456"
            />

            <FormInput
                label="Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Optional image URL"
                required={false}
            />

            <Button type="submit">
                SUBMIT APPLICATION
            </Button>
        </form>
    );
};

export default CoachForm;