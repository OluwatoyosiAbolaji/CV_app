import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = ({ onSubmit }) => {
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateTo: '',
  });
  const [isEdit, setIsEdit] = useState(true);

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsEdit(false);
    onSubmit(experience);
  };

  const handleEdit = () => setIsEdit(true);

  return (
    <div className="experience">
      {isEdit ? (
        <div>
          <h3>Practical Experience</h3>
          <input
            type="text"
            name="companyName"
            value={experience.companyName}
            placeholder="Company Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="positionTitle"
            value={experience.positionTitle}
            placeholder="Position Title"
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            value={experience.responsibilities}
            placeholder="Main Responsibilities"
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateFrom"
            value={experience.dateFrom}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateTo"
            value={experience.dateTo}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Company Name: {experience.companyName}</p>
          <p>Position Title: {experience.positionTitle}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>Date From: {experience.dateFrom}</p>
          <p>Date To: {experience.dateTo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;
