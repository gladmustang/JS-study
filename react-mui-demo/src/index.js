import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import FontIcon from "material-ui/FontIcon"
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import "font-awesome/css/font-awesome.css"

function handleTouchTap() {
    console.log(this);
    alert('onClick triggered on the title component');
}

const styles = {
    title: {
        cursor: 'pointer',
    },
    iconRight: {
        paddingTop: "12px",
        color: "white",
        cursor: 'pointer'
    }
};

const App = () => (
    <MuiThemeProvider>
        <AppBar
            title={<span style={styles.title}>Title</span>}
            onTitleTouchTap={handleTouchTap}
            // iconClassNameRight="fa fa-bell"
            iconElementRight={<FontIcon className="material-icons" style={styles.iconRight}>home</FontIcon>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            onRightIconButtonTouchTap={handleTouchTap}
        />
    </MuiThemeProvider>
);

ReactDOM.render(<App/>, document.getElementById("root1"));