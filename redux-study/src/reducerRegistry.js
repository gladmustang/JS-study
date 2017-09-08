import {combineReducers} from 'redux';
import {countReducer} from './components/Counter';
import {innerReducer} from './components/Inner';
var reducer = combineReducers({
    countReducer,
    innerReducer
})


export default reducer;

