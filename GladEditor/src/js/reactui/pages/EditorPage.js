import React from 'react';
// import RichEditor from '../components/RichEditor'
// import LinkEditor from '../components/LinkEditor'
import MyFroalaEditor from '../components/MyFroalaEditor'
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