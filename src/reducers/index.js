import { combineReducers} from "redux";

const question = (question={}, action) => {
    switch(action.type){
        case "FETCH_QUESTION":
            return {question: action.payload.question, answerOptions: action.payload.answer_options,
                    questionParams: action.payload.question_params};
        case "SUBMIT_ANSWER":
            return {};
        case "GET_HELP":
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
        case "GET_HELP":
            return {};

        default:
            return answer;
    }
};

const help = (help={}, action) => {
  switch(action.type){
      case "GET_HELP":
          return action.payload;
          case "FETCH_QUESTION":
              return {};

      default:
          return help;
  }
};

const helpStepIndex = (index=0, action) => {
    switch(action.type){
        case "POPULATE_HELP_INDEX":
            return action.payload;
        case "FETCH_QUESTION":
            return 0;
        case "GET_HELP":
            return 0;
        default:
            return index;
    }
}
export default combineReducers({question, answer, help, helpStepIndex});