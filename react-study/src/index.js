import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar'

// import welcomeEle from "./Welcome"
// import tick from "./Clock_v1"
// import Clock from "./Clock"
// import Menu from "./Menu"
import Outer from "./Outer"
//
//
// // ReactDOM.render(welcomeEle, $("#root")[0]);
//
// setInterval(function () {
//     tick("root1")
// }, 1000)
//
// ReactDOM.render(<Clock></Clock>, document.getElementById("root2"))
//
//
// ReactDOM.render(<Menu/>, document.getElementById("root3"));

const App = () => (
    <MuiThemeProvider>
        <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            children={<div>hello,sjl</div>}
        />
    </MuiThemeProvider>
);

ReactDOM.render(<Outer/>, document.getElementById("root"));
ReactDOM.render(<App/>, document.getElementById("root1"));