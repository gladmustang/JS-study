// /**
//  * Created by jshen103 on 9/6/2017.
//  */
// import React from 'react'
// import BootNav from './bootcss/BootNav'
// import ReactuiNav from './reactui/ReactuiNav'

// const Nav = ReactuiNav;
//
// const App = (props) => {
//     return  (
//         <div>
//             <Nav/>
//         </div>
//
//     )
// }

import React from 'react'
import BootNav from './bootcss/BootNav'
import ReactuiNav from './reactui/ReactuiNav'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route  exact path="/gladmustang" component={ReactuiNav} />
                <Route path="/gladmustang/bootnav" component={BootNav} />
                {/*<Link to="/gladmustang/bootnav">Go to bootcss</Link>*/}
            </div>
        </Router>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;

