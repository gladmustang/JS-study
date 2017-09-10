import {combineReducers} from 'redux';
import {countReducer} from './samples/Counter';
import {innerReducer} from './samples/Inner';
var reducer = combineReducers({
    countReducer,
    innerReducer
})


export default reducer;

