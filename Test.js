import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.number.trim() || !/^\d{10}$/.test(formData.number))
      newErrors.number = "Enter a valid 10-digit number.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", number: "", address: "", email: "" });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign-Up Form</h2>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <small>{errors.name}</small>}
      </div>

      <div className="form-group">
        <label>Number:</label>
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
        {errors.number && <small>{errors.number}</small>}
      </div>

      <div className="form-group">
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        {errors.address && <small>{errors.address}</small>}
      </div>
  )
        }
