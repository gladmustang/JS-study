/**
 * Created by jshen103 on 8/19/2017.
 */


import React, {Component} from 'react';

class Inner extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        var list = [<div key="1">item 1</div>,<div key="2">item 2</div>, <div key="3">item 3</div>]
        return (
            <div>
                this is {this.props.name}
                <ul>
                    {list}
                </ul>
                <textarea defaultValue="this is a text area in react"></textarea>

            </div>
        )
    }
}

export default Inner;