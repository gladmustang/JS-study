import DynamicDraggableTree from "./DynamicDraggableTree"
import {connect} from "react-redux"

var mapStateToProps = (state, ownProps)=> {
    return {
        currentItemName: state.docsTree.currentItemName,
        showContent: ownProps.showContent
    }
}

var mapDispatchToProps = (dispatch)=>{
    return {
        setCurrentItemName: (itemName)=>{
            dispatch({
                type: 'setCurrentItemName',
                currentItemName: itemName
            });
        }
    }
}

var DynamicDraggableTreeContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(DynamicDraggableTree);

export default DynamicDraggableTreeContainer;