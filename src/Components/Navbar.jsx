import { signOut } from "firebase/auth";
import { auth } from "../Config/firebase";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"; 

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            <span className="logo">
                <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/Chatterbox/Chatterbox+logo+box+Whte.webp" alt="logo" />
            </span>
            <div className="user">
                <img src={currentUser.photoURL} alt="user" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
};

export default Navbar;