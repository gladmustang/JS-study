import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ReactDraftEditor extends Component {
    constructor(props){
        super(props);
        // const html = '';
        // const contentBlock = htmlToDraft(html);
        // if (contentBlock) {
        //     const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        //     editorState = EditorState.createWithContent(contentState);
        // }
    }
    render() {
        const {editorState, onEditorStateChange} = this.props;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onEditorStateChange}
                />

            </div>
        );
    }
}

export default ReactDraftEditor;