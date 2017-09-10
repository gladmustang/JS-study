import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTab from './pages/MainTab'

const ReactuiNav = () => (
    <MuiThemeProvider>
        <div>
            <AppBar style={{
                marginBottom: '1px'
            }}
                title="Glad Editor"
                iconClassNameRight="fa fa-heart-o"
            />
            <MainTab/>
        </div>
    </MuiThemeProvider>
);
export default ReactuiNav;
