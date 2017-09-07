import React, {Component} from 'react';
// var user = {
//     name: "sjl",
//     age: 19
// }
// const element = (
//       <h1>Hello, {user.name}, your age is {user.age} !</h1>
//     );
//
// ReactDOM.render( element,
//   $("#root")[0]
// );

var user = {
    name: "jason",
    age: 19
}


function Welcome(props) {

    return (
        <div>
            <h1>Hello, {props.author.name}</h1>
            <h1>Hello, {props.author.age}</h1>
            <h1>Hello, {props.author.name}</h1>
        </div>
    );
}

const element = <Welcome author={user}/>

export default element;
