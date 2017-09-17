import {combineReducers} from 'redux';
import {countReducer} from '../samples/Counter';
import {innerReducer} from '../samples/Inner';
import editorPageReducer from './editorPageReducer'
import richEditorReducer from './richEditorReducer'
var reducer = combineReducers({
    countReducer,
    innerReducer,
    editorPageReducer,
    richEditorReducer
})


export default reducer;

