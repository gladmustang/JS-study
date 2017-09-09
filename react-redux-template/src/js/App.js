/**
 * Created by jshen103 on 9/6/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import {CounterContainer} from './components/Counter';

const App = (props) => {
    return  (
        <div>
            <CounterContainer />
        </div>

    )
}

export default App;

