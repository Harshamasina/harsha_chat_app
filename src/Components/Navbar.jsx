const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">
                <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/Chatterbox/Chatterbox+logo+box+Whte.webp" alt="logo" />
            </span>
            <div className="user">
                <img src="https://cellix-bio-mis.s3.ap-south-1.amazonaws.com/Chatterbox/1uf6wd.jpg" alt="user" />
                <span>User</span>
                <button>Logout</button>
            </div>
        </div>
    )
};

export default Navbar;