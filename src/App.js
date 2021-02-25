import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import PersonalInfo from './components/PersonalInfo.js';
import { Education } from './components/Education.js';
import Experience from './components/Experience.js'
import Skills from './components/Skills.js'
import PDF from './components/PDF.js'


function App() {
  
  return (
    <div className="App">
      <PDF></PDF>
        <div className="inner-app">
          <PersonalInfo></PersonalInfo>
          <Education></Education>
          <Experience></Experience>
          <Skills></Skills>
        </div>
    </div>
  );
}

export default App;
