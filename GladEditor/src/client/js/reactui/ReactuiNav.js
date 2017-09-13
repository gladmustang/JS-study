import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTab from './pages/MainTab'

class ReactuiNav extends Component {
    rightButtonClick = ()=> {
        alert("hello")
    }
    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar style={{
                        marginBottom: '1px'
                    }}
                            title="Glad Editor"
                            iconClassNameRight="fa fa-times"
                            onRightIconButtonTouchTap={this.rightButtonClick}
                    />
                    <MainTab/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ReactuiNav;
