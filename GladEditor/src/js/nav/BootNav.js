import React, {Component} from 'react'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import RichEditor from "../components/RichEditor"

class BootNav extends Component {
    constructor(props) {
        super(props);
        this.clickItem = this.clickItem.bind(this);
        this.state={
            activeUrl: "/"
        };
    }
    clickItem (url) {
        if(this.state.activeUrl!=url) {
            this.setState({activeUrl:url});
        }

    }
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container">
                            <ul className="nav nav-pills">
                                <li role="presentation" className={this.state.activeUrl=="/"?"active":""} onClick={(e)=> this.clickItem('/')}>
                                    <Link to="/">Editor</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <hr/>
                    <Route path="/" component={RichEditor}/>
                </div>
            </Router>
        );
    }
}

export default BootNav;
