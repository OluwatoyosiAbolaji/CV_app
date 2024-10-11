import React, { useState } from 'react';
import '../styles/Education.css';

const Education = ({ onSubmit }) => {
  const [education, setEducation] = useState({
    school: '',
    studyTitle: '',
    date: '',
  });
  const [isEdit, setIsEdit] = useState(true);

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setIsEdit(false);
    onSubmit(education);
  };

  const handleEdit = () => setIsEdit(true);

  return (
    <div className="education">
      {isEdit ? (
        <div>
          <h3>Education</h3>
          <input
            type="text"
            name="school"
            value={education.school}
            placeholder="School Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="studyTitle"
            value={education.studyTitle}
            placeholder="Title of Study"
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={education.date}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title of Study: {education.studyTitle}</p>
          <p>Date: {education.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
