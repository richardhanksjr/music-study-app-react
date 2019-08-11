import React from 'react';


class HelpPrompt extends React.Component{
    state
    render(){
        const {helpStep} = this.props;
        return (
            <div>{helpStep.prompt}</div>
        )
    }
}


export default HelpPrompt;