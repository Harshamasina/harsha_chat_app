import { BsGoogle } from 'react-icons/bs';

const GoogleLogin = () => {
    return(
        <div className="google-sign-in">
            <span>Sign In with <BsGoogle className="google-icon" /></span>
        </div>
    );
}

export default GoogleLogin;