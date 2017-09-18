import {combineReducers} from 'redux';
import {countReducer} from '../samples/Counter';
import {innerReducer} from '../samples/Inner';
import editorPageReducer from './editorPageReducer'
import richEditorReducer from './richEditorReducer'
import docsTree from './docsTree'
var reducer = combineReducers({
    countReducer,
    innerReducer,
    editorPageReducer,
    richEditorReducer,
    docsTree
})


export default reducer;

