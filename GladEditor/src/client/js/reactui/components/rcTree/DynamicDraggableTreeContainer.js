import DynamicDraggableTree from "./DynamicDraggableTree"
import {connect} from "react-redux"

var mapStateToProps = (state, ownProps)=> {
    return {
        currentItemName: state.get("docsTreeReducer").get("currentItemName"),
        treeData:state.get("docsTreeReducer").get("treeData"),
        selectedKeys: state.get("docsTreeReducer").get("selectedKeys"),
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
        },
        updateTreeData:(treeData)=>{
            dispatch({
                type: 'updateTreeData',
                treeData: treeData
            })
        },
        updateMultiStates: (newStates)=> {
            dispatch({
                type: 'updateMultiStates',
                states: newStates
            })
        }
    }
}

var DynamicDraggableTreeContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(DynamicDraggableTree);

export default DynamicDraggableTreeContainer;