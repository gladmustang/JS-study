/**
 * Created by jshen103 on 9/6/2017.
 */
import React from 'react'
import {CounterContainer} from './components/Counter';
import BasicRouterExample from './components/Router1'
import RouterBootcss from './components/Router2'

const App = (props) => {
    return  (
        <div>
            {/*<BasicRouterExample/>*/}
            <RouterBootcss/>
            <CounterContainer />
        </div>

    )
}

export default App;

