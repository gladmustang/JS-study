/**
 * Created by jshen103 on 9/6/2017.
 */
import React from 'react'
import {CounterContainer} from './components/Counter';
import BasicRouterExample from './components/Router1'

const App = (props) => {
    return  (
        <div>
            <CounterContainer />
            <BasicRouterExample/>
        </div>

    )
}

export default App;

