import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class RenameDialog extends React.Component {
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.handleRenameDialogClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={(e)=> {this.props.handleRenameDialogSubmit(this.props.renameItem)}}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                >
                    <TextField
                        defaultValue="Default Value"
                        floatingLabelText="Floating Label Text"
                    />
                </Dialog>
            </div>
        );
    }
}
