import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import moment from "moment";
import React, { Component } from 'react';

class ViewMessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            message: '',
            avatar: null,
            isUser: null,
            sentAt: null
        }
    }

    componentDidMount() {
        const { id, avatar, message, isUser, sentAt } = this.props
        this.setState({ id, avatar, message, isUser, sentAt })
    }

    requireImage(chemin) {
        try{
            return require(`../../images/${chemin}`)
        }catch(err){
            return require(`../../images/default.jpg`)
  
        }
      }
    render() {
        const StyledBadge = withStyles((theme) => ({
            badge: {
                backgroundColor: '#44b700',
                color: '#44b700',
                boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
                '&::after': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    animation: '$ripple 1.2s infinite ease-in-out',
                    border: '1px solid currentColor',
                    content: '""',
                },
            },
            '@keyframes ripple': {
                '0%': {
                    transform: 'scale(.2)',
                    opacity: 1,
                },
                '100%': {
                    transform: 'scale(2.4)',
                    opacity: 0,
                },
            },
        }))(Badge);

        //gestion du format de date
        const formatDate = (str) => moment(str).format('H:mm:s DD/MM/YYYY ')
      console.log(this.state.nbMessages)
        return (
            <>
                {this.state.message !== '' &&
                    <>
                        {this.state.isUser ?

                            <ListItem button>
                                <ListItemAvatar>
                                    <StyledBadge
                                        overlap="circle"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        
                                    >
                                        <Avatar  src={this.requireImage(this.state.avatar)} />
                                    </StyledBadge>
                                </ListItemAvatar>
                                <Box color="primary.main">
                                    <ListItemText primary='Corentin' secondary={this.state.message} />
                                </Box>

                                <Box position="absolute" right={0} mt={0} mr="20px" fontSize={10} fontFamily="fontFamily">
                                    <p >{formatDate(this.state.sentAt)}</p>
                                </Box>
                            </ListItem>

                            :
                            <ListItem button>

                                <ListItemAvatar>
                                    <StyledBadge
                                        overlap="circle"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        
                                    >
                                        <Avatar  src={this.requireImage(this.state.avatar)} />
                                    </StyledBadge>
                                </ListItemAvatar>
                                <ListItemText primary={this.state.message} />
                                <Box mt={0} mr="20px" fontSize={10} fontFamily="fontFamily">
                                    <p >{formatDate(this.state.sentAt)}</p>
                                </Box>
                            </ListItem>
                        }
                    </>
                }
            </>
        )
    }
}

export default ViewMessage