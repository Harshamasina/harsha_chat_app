import { RiUploadCloud2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span>Register</span>
                <form>
                    <input type="text" placeholder="Enter Username" />
                    <input type="email" placeholder="Enter Email" />
                    <input type="tel" placeholder="Enter Phone Number"/>
                    <input type="password" placeholder="Enter Password" />
                    <input type="password" placeholder="Re-Enter Password" />
                    <input type="file" style={{display:"none"}} placeholder="Upload Image" id="file"/>
                    <label htmlFor="file">
                        Add an Avatar <RiUploadCloud2Line />
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Have an Account? <Link to="/login" className='auth-links'>Sign In</Link></p>
            </div>
        </div>
    )
};

export default Register;