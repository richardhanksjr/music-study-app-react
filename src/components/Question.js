import React from 'react';
import { fetchQuestion, getHelp } from "../actions";
import { connect } from "react-redux";
import AnswerOptions from "./AnswerOptions";

import _ from 'lodash';

class Question extends React.Component{
    componentDidMount() {
        this.props.fetchQuestion();
    }

    getHelp = () => {
        this.props.getHelp(this.props.questionParams)
    };

    render(){

        return(
            _.isEmpty(this.props.question) ? null :
            <div>
                <div>{this.props.question}</div>
                <AnswerOptions />
                <button onClick={this.getHelp}>Get Help</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {question: state.question.question, questionParams: state.question.questionParams}
}
export default connect(mapStateToProps, {fetchQuestion, getHelp})(Question);