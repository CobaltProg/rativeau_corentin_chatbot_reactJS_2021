import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React, { Component, Fragment } from 'react';

class Bots extends Component {
    constructor(props) {
        super(props)
        const { data, message, isMessage } = this.props
        this.state = data
        this.message = message
        this.isMessage = isMessage

    }
   
    requireImage(chemin) {
        try{
            return require(`../../images/${chemin}`)
        }catch(err){
            return require(`../../images/default.jpg`)
  
        }
      }
    render() {
        const { name, type, description, avatar } = this.state
      
        return (


            <Fragment>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt={name} src={this.requireImage(avatar)}  />
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="textPrimary"
                                >
                                    {type}
                                </Typography>
                                {" — "+ description}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </Fragment>




        )
    }
}

export default Bots