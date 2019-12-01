import {combineReducers} from 'redux';
import {CLOSE_POPUP, QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS, RESET} from './actions'

function score(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT :
            let resp = action.payload.questions.filter(question => question.answer === question.userAnswer);
            return resp.length;
        case RESET :
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT :
            return true;
        case RESET :
            return false;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION :
            return action.payload.index;
        case RESET :
            return 0;
        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch (action.type) {
        case QUESTION_ANSWER :
            return state.map((question, i) => {
                return {
                    ...question,
                    userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer
                }
            })
        case INIT_QUESTIONS :
        case RESET :
            return action.payload.questions;
        default:
            return state;
    }
}

function showPopup(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT :
            return true;
        case CLOSE_POPUP :
        case RESET :
            return false;
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions,
    showPopup
}));

export default GlobalState;