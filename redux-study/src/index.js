import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux';
import {CounterContainer, countReducer} from './Counter';
import { Provider } from 'react-redux'
import {innerReducer} from './Inner';


var reducer = combineReducers({
    countReducer,
    innerReducer
})

const store = createStore(reducer);

console.log(store.getState());

store.dispatch({type: "Increase"});
console.log(store.getState());


const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <CounterContainer />
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
