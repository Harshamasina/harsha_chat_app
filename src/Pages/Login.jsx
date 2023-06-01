import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebase";
import GoogleLogin from "../Components/GoogleLogin";

const Login = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    return (
        <div>
            <div className="form-container">
                <div className="form-wrapper">
                    <h1>Welcome to</h1>
                    <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/Chatterbox/Chatterbox+logo+box.webp" alt = "logo" />
                    <span>Login</span>
                    <form onSubmit={handleSubmit}>  
                        <input type="email" placeholder="Enter Email" />
                        <input type="password" placeholder="Enter Password" />
                        <button>Sign In</button>
                        {error && <p>Invalid Credentials</p>}
                    </form>
                    <GoogleLogin />
                    <p>Don't Have an Account? <Link to="/register" className='auth-links'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
};

export default Login;