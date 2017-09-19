import ReactDraftEditor from "./ReactDraftEditor"
import {connect} from "react-redux"

var mapStateToProps = (state, ownProps)=> {
    return {
        editorState: state.get("draftEditorReducer").get("editorState")
    }
}

var mapDispatchToProps = (dispatch)=>{
    return {
        onEditorStateChange: (editorState)=>{
            dispatch({
                type: 'onEditorStateChange',
                editorState: editorState
            });
        }
    }
}

var ReactDraftEditorContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(ReactDraftEditor);

export default ReactDraftEditorContainer;