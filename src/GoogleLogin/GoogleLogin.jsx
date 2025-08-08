// src/components/Login.jsx
import React from "react";
import { auth, provider } from "../../firebaseConfig"; // ✅ correct relative path
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
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
