import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        console.log("in construction");
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        console.log("in clock tick");
        this.setState({ //setState will call the render internally
            date: new Date()
        });

    }
    render(){
        return (
            <div>
                <h1>Beijing Time:</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;

