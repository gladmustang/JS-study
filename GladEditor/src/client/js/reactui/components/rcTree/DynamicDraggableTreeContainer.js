import DynamicDraggableTree from "./DynamicDraggableTree"
import {connect} from "react-redux"

var mapStateToProps = (state, ownProps)=> {
    return {
        currentItemName: state.docsTreeReducer.currentItemName,
        showContent: ownProps.showContent,
        treeData:state.docsTreeReducer.treeData,
        selectedKeys: state.docsTreeReducer.selectedKeys
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
        }
    }
}

var DynamicDraggableTreeContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(DynamicDraggableTree);

export default DynamicDraggableTreeContainer;