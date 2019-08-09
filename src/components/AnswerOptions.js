import React from 'react';
import { connect } from "react-redux";
import { submitAnswer } from "../actions";

class AnswerOptions extends React.Component{

    state = {
        selectedAnswer: this.props.answerOptions[0]
    };

    renderAnswers(){

         return this.props.answerOptions.map((answer, index) => {
             return (
                 answer === this.state.selectedAnswer ?
                     <div>
                         <div>{answer}</div>
                         <input key={answer} type="radio" value={answer} name="answer" onChange={(event) => this.setState({selectedAnswer: event.target.value})} checked/>
                     </div>
                     :
                 <div>
                     <div>{answer}</div>
                     <input key={answer} type="radio" value={answer} name="answer" onChange={(event) => this.setState({selectedAnswer: event.target.value})}/>
                 </div>
             )
         })
    }

    render(){
        if(!this.props.answerOptions){
            return null;
        }
        return (
            <div>
                <div>{this.renderAnswers()}</div>
                <button onClick={() => this.props.submitAnswer(this.state.selectedAnswer, this.props.questionParams)}>Submit</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {answerOptions: state.question.answerOptions, questionParams: state.question.questionParams}
};

export default connect(mapStateToProps, {submitAnswer})(AnswerOptions);