import { useState } from "react";
import "./form.css";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    review: "",
    rating: 0,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Please enter your name.";
    if (!formData.email) newErrors.email = "Please enter your email.";
    if (!formData.password) newErrors.password = "Please enter your password.";
    if (!formData.review.trim()) newErrors.review = "Please write your review.";
    if (formData.rating === 0) newErrors.rating = "Please select a rating.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);

      setSubmittedData(formData);

      setFormData({
        username: "",
        email: "",
        password: "",
        review: "",
        rating: 0,
      });

      setErrors({});
    }
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Your Name"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <small>{errors.username}</small>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small>{errors.email}</small>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <small>{errors.password}</small>}

        <label>Review</label>
        <textarea
          name="review"
          placeholder="Enter Your Review"
          value={formData.review}
          onChange={handleChange}
        ></textarea>
        {errors.review && <small>{errors.review}</small>}

        <label>Rating</label>
        <div style={{ marginBottom: "10px" }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              style={{
                cursor: "pointer",
                fontSize: "22px",
                color: star <= formData.rating ? "#FFD700" : "#ccc",
                marginRight: "5px",
              }}
            >
              ★
            </span>
          ))}
        </div>
        {errors.rating && <small>{errors.rating}</small>}

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="card">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Review:</strong> {submittedData.review}</p>
          <p>
            <strong>Rating:</strong>{" "}
            {"★".repeat(submittedData.rating) + "☆".repeat(5 - submittedData.rating)}
          </p>
        </div>
      )}
    </div>
  );
}

export default Form;