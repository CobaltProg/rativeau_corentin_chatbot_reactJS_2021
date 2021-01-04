import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';


class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
           
        }
    }

    render() {

        return (
            <AppBar position="static" style={{backgroundColor:'#8B0000'}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Welcome to APEX CHATBOT
                </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar