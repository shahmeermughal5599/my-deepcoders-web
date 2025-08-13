import "./Navbar.css";
import logoImage from "../../assets/logo.png";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebaseConfig";
import googleLogo from "../../assets/GoogleLogo.png";

function Navbar() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [user, setUser] = useState({
    token: localStorage.getItem("token"),
    photo: localStorage.getItem("photo"),
    userName: localStorage.getItem("userName"),
  });

  const startGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedUser = result.user;
      console.log(loggedUser);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("photo", loggedUser.photoURL);
      localStorage.setItem("userName", loggedUser.displayName);

      // Update state
      setUser({
        token: accessToken,
        photo: loggedUser.photoURL,
        userName: loggedUser.displayName,
      });

      setShowConfirm(false);
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Courses</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>

        {/* Show Enroll Now button if user not logged in */}
        {!user.token ? (
          <button
            onClick={() => setShowConfirm(true)}
            style={{
              backgroundColor: "rgba(118, 76, 255, 0.991)",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "35px",
              cursor: "pointer",
            }}
          >
            Enroll Now
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row-reverse",
              alignItems: "center",
              // textDecoration: "underline",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#764cff",
              gap: 10,
            }}
          >
            <img
              src={user.photo}
              alt={"pfp"}
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #764cff",
              }}
            />
            <p> {user.userName}</p>
            <p></p>
          </div>
        )}
      </nav>

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-modal">
            <h2 className="confirm-title">Join Us with Google</h2>
            <p className="confirm-subtitle">
              Sign in with Google, then explore site and get in touch!
            </p>

            <div className="confirm-buttons">
              <button className="confirm-yes" onClick={startGoogleLogin}>
                <img
                  src={googleLogo}
                  alt="Google"
                  style={{ width: "20px", marginRight: "8px" }}
                />
                Continue with Google
              </button>
              <button
                className="confirm-no"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
