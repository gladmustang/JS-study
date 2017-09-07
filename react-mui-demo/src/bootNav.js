import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./app1.css"

import HomePage from "./HomePage"
import Outer from "./Outer"


class Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {Body: HomePage, activeIndex: 0}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e,index, page) {
        e.preventDefault();
        this.setState({Body: page, activeIndex: index});
    }

    render(){
        var Body = this.state.Body;
        var activeIndex = this.state.activeIndex;
        var handleClick = this.handleClick;
        var list = [
            {name: "Link0", page: HomePage},
            {name: "Link1", page: Outer},
            {name: "Link2", page: (()=><div>Item2</div>)},
            {name: "Link3", page: (()=><div>Item3</div>)},
            {name: "Link4", page: (()=><div>Item4</div>)},
            {name: "Link5", page: (()=><div>Item5</div>)}
            ];
        var ListEles = list.map(function (item,index) {
            return <li key={item.name} className={activeIndex==index? "active": ""} onClick={(e)=>handleClick(e,index, item.page)}><a href="#">{item.name}</a></li>

        })
        return (
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
                                {ListEles}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Body/>
            </div>
        )
    }


}

ReactDOM.render(<Nav/>, document.getElementById("root"));

