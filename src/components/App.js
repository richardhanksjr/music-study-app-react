import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Question from "./Question";
import Answer from "./Answer";
import Help from "./Help";
import { connect } from "react-redux";



function App() {

  return (
        <div className="App">
            <h1>Music Theory Questions</h1>
          <Question/>
            <Answer/>
            <Help/>
        </div>
  );
}

const mapStateToProps = state => {
  return {help: state.help}
};

export default connect(mapStateToProps)(App);
