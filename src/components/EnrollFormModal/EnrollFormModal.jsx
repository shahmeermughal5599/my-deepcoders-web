import "./EnrollFormModal.css";

function EnrollFormModal({ onClose }) {
  return (
    <div className="enroll-form-backdrop">
      <div className="enroll-form-container">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Enroll Now</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <select>
            <option value="">Select Course</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="frontend">Full Stack Development</option>
            <option value="App">Mobile App Development</option>
          </select>
          <textarea placeholder="Why do you want to join?" rows="4" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EnrollFormModal;
