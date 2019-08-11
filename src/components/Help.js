import React from 'react';
import { connect } from "react-redux";
import _ from 'lodash';
import HelpPrompt from "./HelpPrompt";
import HelpAnswer from "./HelpAnswer";
import { populateNextHelpStepIndex, fetchQuestion } from "../actions";

class Help extends React.Component{

    state = {showAnswer: false};

    nextHelpStep = () =>{
        this.setState({showAnswer: false});
        this.props.populateNextHelpStepIndex(this.props.currentIndex + 1);
    };

    renderHelpSteps(){
        return this.props.help.map((item, index, arr) => {
            if (index <= this.props.currentIndex) {
                if (!this.state.showAnswer && index === this.props.currentIndex) {
                    return (
                        <div>
                            <HelpPrompt helpStep={item}/>
                            <button onClick={() => this.setState({showAnswer: true})}>Answer</button>
                        </div>
                    )
                }else if (this.props.currentIndex < arr.length - 1){
                    return (
                        <div>
                            <HelpPrompt helpStep={item}/>
                            <div>{item.answer}</div>
                            <button onClick={this.nextHelpStep}>Next Help Step</button>
                        </div>)
                }else{
                    return (
                        <div>
                            <HelpPrompt helpStep={item}/>
                            <div>{item.answer}</div>
                            <button onClick={() => this.props.fetchQuestion()}>Next Question</button>
                        </div>)
                }
            }
        })
    }

    render(){
        console.log(this.props.help);
        if (_.isEmpty(this.props.help)){
            return null;
        }
        return (
            <div>{this.renderHelpSteps()}</div>
        )
    }
}

const mapStateToProps = state => {
        console.log(state);
    return {help: state.help, currentIndex: state.helpStepIndex}
};

export default connect(mapStateToProps, {populateNextHelpStepIndex, fetchQuestion})(Help);