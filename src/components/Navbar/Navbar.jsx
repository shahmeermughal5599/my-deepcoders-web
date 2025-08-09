import "./Navbar.css";
import logoImage from "../../assets/logo.png";
import EnrollFormModal from "../EnrollFormModal/EnrollFormModal";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebaseConfig";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({
    photo: localStorage.getItem("photo"),
    token: localStorage.getItem("token"),
  });
  const photoURi = localStorage.getItem("photo");
  console.log("photo", photoURi);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    course: "",
    message: "",
  });

  // Enroll Now button click
  const handleGoogleLogin = async () => {
    // Step 1: Ask user before Google login
    const proceed = window.confirm("Continue with Google to enroll?");
    if (!proceed) return;

    try {
      // Step 2: Google Auth popup
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("photo", user.photoURL);

      setUser({
        token: accessToken,
        photo: user.photoURL,
      });
      console.log("User Info:", {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
      setShowModal(true);
      // Step 3: Auto-fill name & email from Google
      setFormData((prev) => ({
        ...prev,
        name: user.displayName || "",
        email: user.email || "",
      }));

      // Step 4: Open modal after Google login
      setIsModalOpen(true);
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  const handleLougout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("photo");
    setUser({});
  };
  const closeModal = () => setShowModal(false);

  return (
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

      {user.token ? (
        <button onClick={handleLougout}>Logout</button>
      ) : (
        <button
          onClick={handleGoogleLogin}
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
      )}

      <EnrollFormModal
        formData={formData}
        setFormData={setFormData}
        showModal={showModal}
        setShowModal={closeModal}
      />
    </nav>
  );
}

export default Navbar;
