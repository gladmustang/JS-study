import React from 'react';
// import RichEditor from '../components/reactui/RichEditor'
// import LinkEditor from '../components/reactui/LinkEditor'
import MyFroalaEditor from '../components/reactui/MyFroalaEditor'
const Editor = MyFroalaEditor;

const EditorPage = (props) =>{
    return (
        <div style={{
            marginTop: "10px"
        }}>
            <Editor/>
        </div>

    );
}



export default EditorPage;