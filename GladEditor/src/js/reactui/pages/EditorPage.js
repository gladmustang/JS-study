import React from 'react';
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
// import RichEditor from '../components/RichEditor'
// import LinkEditor from '../components/LinkEditor'
// import MyFroalaEditor from '../components/MyFroalaEditor'
import ReactDraftEditor from '../components/ReactDraftEditor'

const Editor = ReactDraftEditor;
const EditorPage = (props) =>{
    const {html} = props;
    if(document.getElementById('htmlDisplay')) {
        document.getElementById('htmlDisplay').innerHTML = html;
    }
    return (
        <div style={{
            marginTop: "10px"
        }}>
            <Tabs>
                <Tab label="DRAFT" >
                    <Editor/>
                </Tab>
                <Tab label="HTML">
                    <div id="htmlDisplay">
                    </div>
                </Tab>
            </Tabs>
        </div>

    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        html: state.editorPageReducer.html
    }
}


var defaultState = {
    html:"",
}
const editorPageReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'contentChange':
            return {
                html: action.html
            };
        default:
            return state;
    }

};

const EditorPageWrapper = connect(
    mapStateToProps,
)(EditorPage)

export default EditorPageWrapper;
export {editorPageReducer};