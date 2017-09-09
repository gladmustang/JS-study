import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import App from './App';
import { Provider } from 'react-redux'
import reducer from "./reduxReducerRegistry"
import "../css/index.css"
import "bootstrap/dist/css/bootstrap.min.css"

const store = createStore(reducer);

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