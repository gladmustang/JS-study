// import { createStore } from 'redux';
// var createStore = require('redux').createStore;

var {combineReducers, createStore, applyMiddleware} = require('redux');
var fetch = require('isomorphic-fetch');

var  {createLogger} = require('redux-logger');
var thunk = require('redux-thunk').default;
const logger = createLogger();

const defaultState = -1;
const reducer1 = (state = -1, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
};

const reducer2 = (state = -2, action) => {
    switch (action.type) {
        case 'MINUS':
            return state - action.payload;
        default:
            return state;
    }
};

const reducer3 = (state = -3, action) => {
    switch (action.type) {
        case 'Before_Send':
            return 1;
        case 'Success':
            return 2;
        case 'error':
            return 3;
        default:
            return state;
    }
};

const reducer = combineReducers({
    reducer1,
    reducer2,
    reducer3
})

const store = createStore(reducer, applyMiddleware(thunk,logger));

console.log(store.getState());

var action = {
    type: 'ADD',
    payload: 2
}

var action2 = {
    type: 'MINUS',
    payload: 2
}
// store.subscribe(function () {
//     console.log(store.getState());
// })
store.dispatch(action);
store.dispatch(action2);

//async

function requestPosts(postTitle) {
    return {
        type: "Before_Send",
        title: postTitle
    }
}

function receivePosts(postTitle, json) {
    return {
        type: "Success",
        title: postTitle,
        message: json
    }
}

const fetchPosts = postTitle => (dispatch, getState) => {
    dispatch(requestPosts(postTitle));
    return fetch('https://api.github.com/')
        .then(response => response.json())
        .then(json => dispatch(receivePosts(postTitle, json)));
};

store.dispatch(fetchPosts('reactjs'));
console.log("fetch again");
store.dispatch(fetchPosts('reactjs')).then(()=>
    console.log(store.getState()))

