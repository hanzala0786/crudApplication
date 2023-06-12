import React, { useState } from 'react';

const Form = ({ addData, editData, setEditData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    city: '',
    state: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
      valid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email ID is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
      valid = false;
    }

    if (!formData.gender) {
      errors.gender = 'Gender is required';
      valid = false;
    }

    if (!formData.dateOfBirth.trim()) {
      errors.dateOfBirth = 'Date of Birth is required';
      valid = false;
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required';
      valid = false;
    }

    if (!formData.state.trim()) {
      errors.state = 'State is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addData(formData);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        gender: '',
        dateOfBirth: '',
        city: '',
        state: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleEdit = (data) => {
    setFormData(data);
    setEditData(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span>{errors.fullName}</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label>Email ID:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && <span>{errors.dateOfBirth}</span>}
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <span>{errors.state}</span>}
      </div>
      {editData ? (
        <button type="submit">Update</button>
      ) : (
        <button type="submit">Submit</button>
      )}
    </form>
  );
};

export default Form;
