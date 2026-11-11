import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import {AuthContext} from "../context/AuthContext"
import { useContext } from "react";
const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (formData) => {
        login(formData.email);
        navigate("/");
    };

    return (
        <main className="auth-page">

            <AuthForm
                title="WELCOME BACK"
                buttonText="LOGIN"
                onSubmit={handleLogin}
            />

            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>

        </main>
    );
};

export default Login;