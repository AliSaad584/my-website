import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import {AuthContext} from "../context/AuthContext"
import { useContext } from "react";

const SignUp = () => {

    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (formData) => {
        signUp(formData.name, formData.email);
        navigate("/");
    };

    return (
        <main className="auth-page">

            <AuthForm
                title="CREATE YOUR ACCOUNT"
                buttonText="SIGN UP"
                onSubmit={handleSignUp}
                isSignUp={true}
            />

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>

        </main>
    );
};

export default SignUp;