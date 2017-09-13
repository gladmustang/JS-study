import React,{Component} from 'react';
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import ReactDraftEditor from '../components/ReactDraftEditor'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import DynamicDraggableTree from  '../components/rcTree/DynamicDraggableTree'

// const divStyle={
//     width: "45%",
//     height: 200,
//     display: "inline-block"
// }
const leftStyle = {
    width: '20%',
    minHeight: 600,
    // textAlign: 'center',
    float: "left",
    marginLeft: '2%',
    marginRight:'2%',
};

const rightStyle = {
    width: '74%',
    // textAlign: 'center',
    float: "left"
};

const Editor = ReactDraftEditor;


class ReactDraftEditorPage extends Component {
    constructor(props) {
        super(props);
        this.onEditorStateChange= this._onEditorStateChange.bind(this);
        this.state={
            editorState: EditorState.createEmpty()
        };
        //loading previous state
        const html = '<p>&nbsp;</p> <h2><strong>install</strong></h2></p>';
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            this.state.editorState = EditorState.createWithContent(contentState);
        }

    }
    // state = {
    //     editorState: EditorState.createEmpty(),
    // }

    _onEditorStateChange (editorState) {
        this.setState({
            editorState,
        });
    };
    render() {
        const { editorState } = this.state;
        var html =draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log(html);
        return (
            <div style={{
                marginTop: "10px"
            }}>
                <Card style={leftStyle}>
                    <CardHeader style={{backgroundColor: 'rgb(0, 188, 212)'}}
                        title="Documents" titleStyle={{color: 'white'}}
                        // subtitle="Subtitle"
                    />
                    <CardText>
                        <DynamicDraggableTree/>
                    </CardText>
                </Card>

                    <Paper  style={rightStyle} zDepth={1} children={
                        <Tabs>
                            <Tab label="DRAFT" >
                                <Editor onEditorStateChange = {this.onEditorStateChange} editorState={editorState}/>
                            </Tab>
                            <Tab label="HTML">
                                <div id="htmlDisplay" dangerouslySetInnerHTML={{__html: html}}>
                                </div>
                            </Tab>
                        </Tabs>

                    } />




            </div>

        );
    }
}

const ReactDraftEditorPageWrapper = connect()(ReactDraftEditorPage)

export default ReactDraftEditorPageWrapper;
