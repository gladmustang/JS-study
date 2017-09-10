import React,{Component} from 'react';
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
// import RichEditor from '../components/RichEditor'
// import LinkEditor from '../components/LinkEditor'
// import MyFroalaEditor from '../components/MyFroalaEditor'
import ReactDraftEditor from '../components/ReactDraftEditor'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


const Editor = ReactDraftEditor;

class EditorPage extends Component {
    constructor(props) {
        super(props);
        this.onEditorStateChange= this._onEditorStateChange.bind(this);

    }
    state = {
        editorState: EditorState.createEmpty(),
    }

    _onEditorStateChange (editorState) {
        this.setState({
            editorState,
        });
    };
    render() {
        const { editorState } = this.state;
        var html =draftToHtml(convertToRaw(editorState.getCurrentContent()));
        return (
            <div style={{
                marginTop: "10px"
            }}>
                <Tabs>
                    <Tab label="DRAFT" >
                        <Editor onEditorStateChange = {this.onEditorStateChange} editorState={editorState}/>
                    </Tab>
                    <Tab label="HTML">
                        <div id="htmlDisplay" dangerouslySetInnerHTML={{__html: html}}>
                        </div>
                    </Tab>
                </Tabs>
            </div>

        );
    }
}

const EditorPageWrapper = connect()(EditorPage)

export default EditorPageWrapper;
