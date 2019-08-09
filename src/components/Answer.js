import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import { fetchQuestion } from "../actions";


class Answer extends React.Component{
    nextQuestion = () => {
        this.props.fetchQuestion();
    }
    render(){
        if (_.isEmpty(this.props.answer)){
            return null
        }
        return(
            this.props.answer.userCorrect ?
            <div>
                <div>You are correct</div>
                <button onClick={this.nextQuestion}>Next Question</button>
            </div>:
                <div>
                    <div>Wrong</div>
                    <button onClick={this.nextQuestion}>Next Question</button>
                </div>
        )
    }
}

const mapStateToProps = state => {
  return {answer: state.answer}
};

export default connect(mapStateToProps, {fetchQuestion})(Answer);