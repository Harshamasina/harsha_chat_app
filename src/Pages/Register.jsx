import { RiUploadCloud2Line } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { auth, storage, db } from '../Config/firebase';
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore'; 

const Register = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const phone = e.target[2].value;
        const password = e.target[3].value;
        const file = e.target[4].files[0];

        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);
            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try{
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            phone,
                            photoURL: downloadURL,
                        });

                        await setDoc(doc(db, "chats", res.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setError(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <span>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Username" required/>
                    <input type="email" placeholder="Enter Email" required/>
                    <input type="tel" placeholder="Enter Phone Number" required/>
                    <input type="password" placeholder="Enter Password" required/>
                    <input type="file" style={{display:"none"}} placeholder="Upload Image" id="file"/>
                    <label htmlFor="file">
                        Add an Avatar <RiUploadCloud2Line />
                    </label>
                    <button>Sign Up</button>
                    {loading && <p>Uploading and compressing the image please wait...</p> }
                    {error && <p>Something went wrong!</p>}
                </form>
                <p>Have an Account? <Link to="/login" className='auth-links'>Sign In</Link></p>
            </div>
        </div>
    )
};

export default Register;