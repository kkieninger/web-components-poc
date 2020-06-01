import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import "./web-components/test-component";
import "./web-components/react-component";
import "./web-components/reactive-component";

function App() {
  const [state, setState] = useState(
    "This was passed down from the parent app"
  );

  const [appName, setAppName] = useState('Kevin');

  useEffect(() => {
    // add a settimeout to mock API call / props changing
    setTimeout(() => {
      setState("This was updated and then passed down from the parent app");
      setAppName(appName === "Kevin" ? "Updated Kevin" : "Kevin");
    }, 2000);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <test-component></test-component>
        <react-test-component name={state}></react-test-component>
        <reactive-test-component name={appName}></reactive-test-component>
      </header>
    </div>
  );
}

export default App;
