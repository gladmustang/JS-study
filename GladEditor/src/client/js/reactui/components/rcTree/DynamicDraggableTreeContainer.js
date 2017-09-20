import DynamicDraggableTree from "./DynamicDraggableTree"
import {connect} from "react-redux"
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import {findKeyInTree} from './dynamicUtils'

var mapStateToProps = (state, ownProps)=> {
    return {
        currentItemName: state.get("docsTreeReducer").get("currentItemName"),
        currentDocKey: state.get("docsTreeReducer").get("currentDocKey"),
        treeData:state.get("docsTreeReducer").get("treeData"),
        selectedKeys: state.get("docsTreeReducer").get("selectedKeys")
    }
}

var mapDispatchToProps = (dispatch)=>{
    return {
        setCurrentDoc:(currentDocKey) => {
            dispatch({
                type: 'setCurrentDoc',
                currentDocKey: currentDocKey
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
        },
        showContent:(content)=> {
            //loading previous state
            const html = content;
            const contentBlock = htmlToDraft(html);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                dispatch({
                    type: 'onEditorStateChange',
                    editorState: EditorState.createWithContent(contentState)
                });
            }
        },
        deleteDoc:(treeData, deleteKey)=> {
            var newData = [...treeData];
            let deleteObj;
            findKeyInTree(newData, deleteKey, (item, index, arr) => {
                arr.splice(index, 1);
                deleteObj = item;
            });
            fetch("./documents/deleteDoc",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({docPath: deleteObj.key})
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                if(data.code==0) {
                    dispatch({
                        type: 'updateTreeData',
                        treeData: newData
                    });
                    alert("delete success");
                } else {
                    console.log(data.error);
                    alert("delete error");
                }

            }).catch(function(e) {
                console.log(e);
                console.log("Oops, error");
            });
        },
        addChildFolder: (treeData, parentKey)=>{
            const newData = [...treeData];
            findKeyInTree(newData, parentKey, (item, index, arr) => {
                item.children.push(
                    {name:"NewFolder", key: item.key + "\\NewFolder"}
                );
            });
            dispatch({
                type: 'updateTreeData',
                treeData: newData
            });
        }
    }
}

var DynamicDraggableTreeContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(DynamicDraggableTree);

export default DynamicDraggableTreeContainer;