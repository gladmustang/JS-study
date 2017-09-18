import {combineReducers} from 'redux';
import {countReducer} from '../samples/Counter';
import {innerReducer} from '../samples/Inner';
import editorPageReducer from './editorPageReducer'
import richEditorReducer from './richEditorReducer'
import docsTreeReducer from './docsTreeReducer'
var reducer = combineReducers({
    countReducer,
    innerReducer,
    editorPageReducer,
    richEditorReducer,
    docsTreeReducer
})


export default reducer;

