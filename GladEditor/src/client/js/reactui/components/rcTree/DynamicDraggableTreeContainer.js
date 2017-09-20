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
            var currentItem = null;
            findKeyInTree(newData, parentKey, (item, index, arr) => {
                currentItem = item;
                // item.children.push(
                //     {name:"NewFolder", key: item.key + "\\NewFolder"}
                // );
            });
            if(currentItem) {
                fetch("./documents/addDir",{
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({dirPath: currentItem.key + "\\NewFolder"})
                }).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if(data.code==0) {
                        currentItem.children.push(
                            {name:"NewFolder", key: currentItem.key + "\\NewFolder"}
                        );
                        dispatch({
                            type: 'updateTreeData',
                            treeData: newData
                        });
                        alert("Add folder success");
                    } else {
                        console.log(data.error);
                        alert("Add folder error");
                    }

                }).catch(function(e) {
                    console.log(e);
                    console.log("Oops, error");
                });
            } else {
                alert("Error when adding folder");
            }
        },
        renameDirOrDoc: (treeKey, newName, treeData)=> {
            const newTreeData = [...treeData];

            fetch("./documents/renameDirOrDoc",{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({dirOrDocPath: treeKey, newName: newName})
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                if(data.code==0) {
                    findKeyInTree(newTreeData, treeKey, (item, index, arr) => {
                        item.name=newName;
                        item.key = data.treeItemInfo.key;
                    });
                    dispatch({
                        type: 'updateTreeData',
                        treeData: newTreeData
                    });
                    alert("Rename success");
                } else {
                    console.log(data.error);
                    alert("Rename error");
                }

            }).catch(function(e) {
                console.log(e);
                console.log("Oops, error");
            });
        }

    }
}

var DynamicDraggableTreeContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(DynamicDraggableTree);

export default DynamicDraggableTreeContainer;