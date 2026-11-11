import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import FormInput from "../components/common/FormInput";
import Button from "../components/common/Button";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <main className="page-container">

            <PageHeader
                title="CONTACT US"
                description="Have a question? We'd love to hear from you."
            />

            <div className="contact-layout">

                <div className="contact-information">
                    <h2>GET IN TOUCH</h2>
                    <p>We are happy to answer your questions.</p>

                    <p><strong>Email:</strong> info@nextfit.com</p>
                    <p><strong>Phone:</strong> +961 70 000 000</p>
                    <p><strong>Location:</strong> Lebanon</p>
                </div>

                <form className="general-form" onSubmit={handleSubmit}>

                    <FormInput
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                    />

                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                    />

                    <FormInput
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                    />

                    <div className="form-group">
                        <label htmlFor="message">Message</label>

                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            required
                        />
                    </div>

                    <Button type="submit">SEND MESSAGE</Button>

                    {submitted && (
                        <p className="success-message">
                            Your message has been submitted in this demo.
                        </p>
                    )}

                </form>

            </div>

        </main>
    );
};

export default Contact;