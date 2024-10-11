import React, { useState } from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVDisplay from './components/CVDisplay';

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGeneralSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationSubmit = (data) => {
    setEducation(data);
  };

  const handleExperienceSubmit = (data) => {
    setExperience(data);
  };

  const handleSubmitAll = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      <h1>CV Builder</h1>
      {!isSubmitted ? (
        <div>
          <GeneralInfo onSubmit={handleGeneralSubmit} />
          <Education onSubmit={handleEducationSubmit} />
          <Experience onSubmit={handleExperienceSubmit} />
          <button onClick={handleSubmitAll}>Submit All</button>
        </div>
      ) : (
        <CVDisplay generalInfo={generalInfo} education={education} experience={experience} />
      )}
    </div>
  );
}

export default App;
