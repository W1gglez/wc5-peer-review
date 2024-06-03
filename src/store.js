import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const initialState = '';

const feelingReducer = (state = initialState, action) => {
    if (action.type === 'ADD_FEELINGS') {
        return action.payload.feeling;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return '';
    } 
    return state;
};

const understandingReducer = (state = initialState, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload.understanding;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return '';
    } 
    return state;
};

const supportReducer = (state = initialState, action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload.support;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return '';
    } 
    return state;
};

const commentReducer = (state = initialState, action) => {
    if (action.type === 'ADD_COMMENTS') {
        return action.payload.comment;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return '';
    } 
    return state;
};



const store = createStore(
    combineReducers({
        feeling: feelingReducer,
        understanding: understandingReducer,
        support: supportReducer,
        comments: commentReducer,
     
    }),
    applyMiddleware(logger)
  );
export default store;
