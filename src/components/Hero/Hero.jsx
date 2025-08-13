import "./Hero.css";
import heroImage from "../../assets/hero-img.png";
import { FaSearch } from "react-icons/fa";
import { CircularBadge } from "../CircularBadge/CircularBadge";
import { useState } from "react";

function Hero() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <h1>Level Up Your Coding Journey</h1>
          <p>
            Deep Coders — Orangi Town’s Premier Hub for Future Tech Leaders.
            Founded by Shahmeer Mughal & Muhammad Ali Mughal.
          </p>
          <button onClick={() => setShowModal(true)}>Contact Now </button>

          <div className="review">
            <div className="avatars">
              <img src="https://i.pravatar.cc/40?img=1" alt="avatar" />
              <img src="https://i.pravatar.cc/40?img=2" alt="avatar" />
              <img src="https://i.pravatar.cc/40?img=3" alt="avatar" />
              <div className="plus">+</div>
            </div>
            <div className="stars">
              <span className="star-icons">⭐⭐⭐⭐</span>
              <span className="review-text">100+ Reviews of our Courses</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="Hero" />
        </div>
        <CircularBadge />
      </section>

      <div className="search-review-wrapper">
        <div className="search-box-with-icon">
          <input
            type="text"
            placeholder="Search  A Course For Your Feature Job"
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </>
  );
}

export default Hero;
