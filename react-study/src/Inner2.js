/**
 * Created by jshen103 on 8/20/2017.
 */

import React, {Component} from 'react';

class Inner2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );

    }
}

export default Inner2;
