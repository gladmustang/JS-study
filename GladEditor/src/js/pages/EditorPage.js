import React from 'react';
import RichEditor from '../components/RichEditor'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
};
const EditorPage = (props) =>{
    return (
        <div>
            <RichEditor/>
            <RaisedButton label="Get input" primary={true} style={style} />
        </div>

    );
}



export default EditorPage;