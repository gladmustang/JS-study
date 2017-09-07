import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function Clock_v1(props) {
    // props.name="sjl" //can not change props
    const element = (
        <div>
            <h1>Clock {props.name}:</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return element;
}

function tick(domId) {
    console.log("tick")
    var element = <Clock_v1 name="jason"/>
    ReactDOM.render(element, document.getElementById("root1"));
}


export default tick;
