import React from 'react';
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
// import RichEditor from '../components/RichEditor'
// import LinkEditor from '../components/LinkEditor'
// import MyFroalaEditor from '../components/MyFroalaEditor'
import ReactDraftEditor from '../components/ReactDraftEditor'

const Editor = ReactDraftEditor;
const EditorPage = (props) =>{
    const {htmlContent} = props;
    console.log(htmlContent);
    if(document.getElementById('htmlDisplay')) {
        document.getElementById('htmlDisplay').innerHTML = htmlContent;
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
        htmlContent: state.editorPageReducer.htmlContent
    }
}


var defaultState = {
    htmlContent:"initial",
}
const editorPageReducer = (state= defaultState, action) => {
    switch (action.type) {
        case 'contentChange':
            return {
                htmlContent: action.htmlContent
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