import EditorToolBar from "./EditorToolBar"
import {connect} from "react-redux"

var mapStateToProps = (state, ownProps)=> {
    return {
        // currentItemName: state.docsTreeReducer.currentItemName,
        currentItemName: state.get("docsTreeReducer").get("currentItemName")
    }
}

var mapDispatchToProps = (dispatch)=>{
    return {
        handleChange: (event)=>{
            dispatch({
                type: 'changeCurrentItemName',
                currentItemName: event.target.value
            });
        }
    }
}

var EditorToolBarContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(EditorToolBar);

export default EditorToolBarContainer;