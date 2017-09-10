import {combineReducers} from 'redux';
import {countReducer} from './samples/Counter';
import {innerReducer} from './samples/Inner';
import {editorPageReducer} from './reactui/pages/EditorPage'
var reducer = combineReducers({
    countReducer,
    innerReducer,
    editorPageReducer
})


export default reducer;

