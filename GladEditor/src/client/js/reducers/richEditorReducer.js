import {EditorState} from 'draft-js';

var defaultState = {
    editorState: EditorState.createEmpty()
}
const richEditorReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'change':
            return {
                editorState: action.editorState
            };
        default:
            return state;
    }

};
export default richEditorReducer;
