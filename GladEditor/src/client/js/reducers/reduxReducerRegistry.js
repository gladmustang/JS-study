// import {combineReducers} from 'redux';
import {combineReducers } from 'redux-immutable';
import editorPageReducer from './editorPageReducer'
import richEditorReducer from './richEditorReducer'
import docsTreeReducer from './docsTreeReducer'
var reducer = combineReducers({
    editorPageReducer,
    richEditorReducer,
    docsTreeReducer
})


export default reducer;

