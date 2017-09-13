import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTab from './pages/MainTab'

class ReactuiNav extends Component {
    rightButtonClick = ()=> {
        fetch("./closeApp").then(function(response) {
            return response.json();
        }).then(function(data) {
            if(data.code==0) {
                console.log(data);
            } else {
                console.log(data.error);
            }

        }).catch(function(e) {
            // alert("App stopped, will close the window !");
            console.log("Oops, error");
            window.opener=null;
            window.close();
        });
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
