import React from 'react';
import '../styles/CVDisplay.css';

const CVDisplay = ({ generalInfo, education, experience }) => {
  return (
    <div className="cv-display">
      <h2>Curriculum Vitae</h2>
      <div>
        <h3>General Information</h3>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>
      <div>
        <h3>Education</h3>
        <p>School: {education.school}</p>
        <p>Title of Study: {education.studyTitle}</p>
        <p>Date: {education.date}</p>
      </div>
      <div>
        <h3>Practical Experience</h3>
        <p>Company Name: {experience.companyName}</p>
        <p>Position Title: {experience.positionTitle}</p>
        <p>Responsibilities: {experience.responsibilities}</p>
        <p>Date From: {experience.dateFrom}</p>
        <p>Date To: {experience.dateTo}</p>
      </div>
    </div>
  );
};

export default CVDisplay;
