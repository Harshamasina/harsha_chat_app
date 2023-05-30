import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div className="form-container">
            <div className="form-wrapper">
                <h1>Welcome to</h1>
                <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/Chatterbox/Chatterbox+Logo.png" alt = "logo" />
                <span>Login</span>
                <form>
                    <input type="email" placeholder="Enter Email" />
                    <input type="password" placeholder="Enter Password" />
                    <button>Sign In</button>
                </form>
                <p>Don't Have an Account? <Link to="/register" className='auth-links'>Sign Up</Link></p>
            </div>
        </div>
        </div>
    )
};

export default Login;