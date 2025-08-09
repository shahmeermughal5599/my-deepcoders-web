// src/components/Login.jsx
import React from "react";
import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const GoogleLogin = () => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("✅ Logged in user:", result.user);
        // Optionally: Redirect ya state update karo
      })
      .catch((error) => {
        console.error("❌ Login error:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: "#2563EB", // blue-600
          color: "white",
          padding: "12px 24px",
          borderRadius: "0.375rem",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#1D4ED8"; // blue-700
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#2563EB"; // blue-600
        }}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
