import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



class ReactDraftEditor extends Component {
    constructor(props){
        super(props);
        this.onEditorStateChange=this.onEditorStateChange.bind(this);
        let editorState = EditorState.createEmpty();
        // const html = '';
        // const contentBlock = htmlToDraft(html);
        // if (contentBlock) {
        //     const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        //     editorState = EditorState.createWithContent(contentState);
        // }
        this.state = {
            editorState,
        };
    }
    // state = {
    //     editorState: EditorState.createEmpty(),
    // }

    onEditorStateChange (editorState) {
        // var html = convertToRaw(editorState.getCurrentContent());
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />

            </div>
        );
    }
}

export default ReactDraftEditor;