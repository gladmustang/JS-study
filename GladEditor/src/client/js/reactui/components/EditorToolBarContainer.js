import EditorToolBar from "./EditorToolBar"
import {connect} from "react-redux"

var mapStateToProps = (state, ownProps)=> {
    return {
        currentItemName: state.docsTree.currentItemName,
    }
}

var mapDispatchToProps = (dispatch)=>{
    return {
        // setCurrentItemName: (itemName)=>{
        //     dispatch({
        //         type: 'setCurrentItemName',
        //         currentItemName: itemName
        //     });
        // }
    }
}

var EditorToolBarContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(EditorToolBar);

export default EditorToolBarContainer;