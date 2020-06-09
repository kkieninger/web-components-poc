import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import "./web-components/test-component";
import "./web-components/react-component";
import "./web-components/reactive-component";
import "./web-components/react-error-component";

function App() {
  const [title, setTitle] = useState('Initial Title');
  const [appName, setAppName] = useState('Kevin');

  useEffect(() => {
    // add a settimeout to mock API call / props changing
    setTimeout(() => {
      setTitle("New Title");
      setAppName(appName === "Kevin" ? "Updated Kevin" : "Kevin");
    }, 2000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <test-component></test-component>
        <react-test-component title={title}></react-test-component>
        <reactive-test-component name={appName}></reactive-test-component>
        <react-error-component title="This throws an error"></react-error-component>
      </header>
    </div>
  );
}

export default App;
