import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

const GeneralInfo = ({ onSubmit }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEdit, setIsEdit] = useState(true);

  const handleChange = (e) => {
    setGeneralInfo({
      ...generalInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsEdit(false);
    onSubmit(generalInfo);
  };

  const handleEdit = () => setIsEdit(true);

  return (
    <div className="general-info">
      {isEdit ? (
        <div>
          <h3>General Information</h3>
          <input
            type="text"
            name="name"
            value={generalInfo.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            value={generalInfo.phone}
            placeholder="Phone"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
