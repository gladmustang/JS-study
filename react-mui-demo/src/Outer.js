/**
 * Created by jshen103 on 8/19/2017.
 */


import React, {Component} from 'react';


import InnerEle from "./Inner"
import Inner2 from "./Inner2"

class Outer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "initial name"};
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        console.log("mounted")
        this.setState({name: "didMount name"})
    }

    handleClick (){
        this.setState({name: Math.random()});
    }
    render(){
        return (
            <div>
                <InnerEle name={this.state.name} />
                <button type="button" onClick={this.handleClick}>click to change Text</button>
                <Inner2>
                    <div> haha this is in Inner2</div>
                </Inner2>
            </div>

        )
    }
}

export default Outer;
