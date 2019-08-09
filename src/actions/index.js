import axios from 'axios';
const baseUrl = "http://localhost:8000";

export const fetchQuestion =  () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/api/question`);
    return dispatch({type: "FETCH_QUESTION", payload: response.data})
};

export const submitAnswer = (answer, questionParams) => async (dispatch) => {
    const response = await axios.post(`${baseUrl}/api/answer`, {...questionParams, user_answer: answer});
    return dispatch({type: "SUBMIT_ANSWER", payload: response.data});
};

export const getHelp = questionParams => async dispatch => {
    const response = await axios.post(`${baseUrl}/api/help`, {...questionParams})
    console.log(response.data);
}