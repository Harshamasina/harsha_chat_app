import { useState } from "react";
import { db } from "../Config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [error, setError] = useState(false);

    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username));
        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    console.log(user);

    return (
        <div className="search">
            <div className="search-form">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Find a User by Username or Email" 
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={handleKey}
                />
            </div>
            {error && <span>User not found</span>}
            {
                user && (
                    <div className="user-chat">
                        <img src={user.photoURL} alt="" />
                        <div className="user-chat-info">
                            <span>{user.displayName}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Search;