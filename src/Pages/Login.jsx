import { Link } from "react-router-dom";
import { BsGoogle } from 'react-icons/bs';

const Login = () => {
    return (
        <div>
            <div className="form-container">
                <div className="form-wrapper">
                    <h1>Welcome to</h1>
                    <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/Chatterbox/chatterbox-high-resolution-logo-color-on-transparent-background.webp" alt = "logo" />
                    <span>Login</span>
                    <form>
                        <input type="email" placeholder="Enter Email" />
                        <input type="password" placeholder="Enter Password" />
                        <button>Sign In</button>
                    </form>
                    <div className="google-sign-in">
                        <span>Sign In with <BsGoogle className="google-icon" /></span>
                    </div>
                    <p>Don't Have an Account? <Link to="/register" className='auth-links'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
};

export default Login;