// src/components/EnrollForm.jsx
import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const EnrollForm = ({ formData, setFormData, setShowModal, showModal }) => {
  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "enrollments"), formData);
      alert("✅ Enrollment submitted successfully!");
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (error) {
      console.error("Error saving enrollment:", error);
    }
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
            }}
          >
            <h2>Enroll Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Full Name"
                required
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                required
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <select
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                required
                style={{ width: "100%", marginBottom: "10px" }}
              >
                <option value="">Select Course</option>
                <option value="React">React</option>
                <option value="Next.js">Next.js</option>
                <option value="JavaScript">JavaScript</option>
              </select>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message"
                style={{ width: "100%", marginBottom: "10px" }}
              ></textarea>

              <button
                type="submit"
                style={{
                  backgroundColor: "#2563EB",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "gray",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnrollForm;
