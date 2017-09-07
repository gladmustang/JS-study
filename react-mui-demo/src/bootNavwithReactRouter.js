import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./app1.css"

import {
    HashRouter as Router,
    Route,
    NavLink,
    Link
} from 'react-router-dom'



class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        $(e.target).parent().siblings().removeClass("active");
        $(e.target).parent().addClass("active");
    }

    render(){
        const Home = () => (
            <div>
                <h2>Home</h2>
            </div>
        )

        const About = () => (
            <div>
                <h2>About</h2>
            </div>
        )

        const Topics = () => (
            <div>
                <h2>Topics</h2>
            </div>
        )

        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">
                                    Home
                                </a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li onClick={this.handleClick}><NavLink to="/">Home</NavLink></li>
                                    <li onClick={this.handleClick}><NavLink to="/about">About</NavLink></li>
                                    <li onClick={this.handleClick}><NavLink to="/topics">Topics</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        )
    }

}

ReactDOM.render(<Nav/>, document.getElementById("root"));

