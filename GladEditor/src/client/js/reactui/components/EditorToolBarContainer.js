import EditorToolBar from "./EditorToolBar"
import {connect} from "react-redux"
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import {findKeyInTree} from './rcTree/dynamicUtils'

var mapStateToProps = (state, ownProps)=> {
    return {
        // currentItemName: state.docsTreeReducer.currentItemName,
        currentItemName: state.get("docsTreeReducer").get("currentItemName"),
        editorState: state.get("draftEditorReducer").get("editorState"),
        currentDocKey: state.get("docsTreeReducer").get("currentDocKey"),
        treeData:state.get("docsTreeReducer").get("treeData")
    }
}

var mapDispatchToProps = (dispatch)=>{
    return {
        handleChange: (event)=>{
            dispatch({
                type: 'changeCurrentItemName',
                currentItemName: event.target.value
            });
        },
        saveDoc: (props)=> {
            var {currentDocKey, editorState, treeData} = props;
            const data = [...treeData];
            var currentItem = null;
            findKeyInTree(data, currentDocKey, (item, index, arr) => {
                currentItem = item;
            });
            if(currentItem) {
                var newFileName = currentItem.name;
                var docPath = currentItem.key;
                var html =draftToHtml(convertToRaw(editorState.getCurrentContent()));
                fetch("./documents/saveDoc",{
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({docPath: docPath, fileName: newFileName, content: html })
                }).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    if(data.code==0) {
                        //_this.props.updateTreeData(treeData);
                        var fileInfo= data.fileInfo;
                        currentItem.name = fileInfo.name;
                        currentItem.key=fileInfo.key;
                        dispatch({
                            type:'updateTreeData',
                            treeData: treeData
                        })
                    } else {
                        console.log(data.error);
                    }

                }).catch(function(e) {
                    console.log(e);
                    console.log("Oops, error");
                });
            } else {
                alert("Error on saving!");
            }

        }

    }
}

var EditorToolBarContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(EditorToolBar);

export default EditorToolBarContainer;