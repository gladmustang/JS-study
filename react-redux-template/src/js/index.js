import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux';
import App from './App';
import { Provider } from 'react-redux'
import reducer from "./reduxReducerRegistry"
import "../css/index.css"
import "bootstrap/dist/css/bootstrap.min.css"

const store = createStore(reducer);

// console.log(store.getState());
// store.dispatch({type: "Increase"});
// console.log(store.getState());


const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
