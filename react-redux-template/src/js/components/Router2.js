import React, {Component} from 'react'
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'


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
const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

class RouterBootcss extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container">
                            <ul className="nav nav-pills">
                                <li role="presentation" className="active">
                                    <Link to="/">Home</Link>
                                </li>
                                <li role="presentation">
                                    <Link to="about">Profile</Link>
                                </li>
                                <li role="presentation">
                                    <Link to="topics">Messages</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>
        );
    }
}

export default RouterBootcss;
