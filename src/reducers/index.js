import { combineReducers} from "redux";

const question = (question={}, action) => {
    switch(action.type){
        case "FETCH_QUESTION":
            return {question: action.payload.question, answerOptions: action.payload.answer_options,
                    questionParams: action.payload.question_params};
        case "SUBMIT_ANSWER":
            return {};
        default:
            return question;
    }
};

const answer = (answer={}, action) => {

    switch(action.type){
        case "SUBMIT_ANSWER":
            return {correctAnswer: action.payload.question,
                    question: action.payload.question,
                    userCorrect: action.payload.user_correct};
        case "FETCH_QUESTION":
            return {};

        default:
            return answer;
    }
};
export default combineReducers({question, answer});