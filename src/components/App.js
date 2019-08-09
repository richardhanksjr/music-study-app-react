import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Question from "./Question";
import Answer from "./Answer";



function App() {
  return (
        <div className="App">
            <h1>Music Theory Questions</h1>
          <Question/>
            <Answer/>
        </div>
  );
}

export default App;
