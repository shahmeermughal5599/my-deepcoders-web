import "./Navbar.css";
import logoImage from "../../assets/logo.png";
import EnrollFormModal from "../EnrollFormModal/EnrollFormModal";
import { useState } from "react";
import GoogleLogin from "../../GoogleLogin/GoogleLogin";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
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
      <GoogleLogin />
      <button className="navbar-btn" onClick={openModal}>
        Enroll Now
      </button>
      {showModal && <EnrollFormModal onClose={closeModal} />}
    </nav>
  );
}

export default Navbar;
