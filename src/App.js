import React, { Component, createRef } from 'react';
import {
   Box,
  Grid,
  List, 
  Paper, 
  Typography
} 
from '@material-ui/core'

//Components
import Bots from './components/Bots';
import BotsList from './components/Bots/BotsList';
import Nav from './components/Nav';
import SendMessage from './components/SendMessage';
import ViewMessage from './components/ViewMessage';

//Animations
import {
  CSSTransition,
  TransitionGroup
}
from 'react-transition-group';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.allbots = { BotsList }
    this.messagesRef = createRef()
    this.state =
    {
      
      messages: {},
      currentMessageUser: '',
      isMessage: false
    }
  }
  addMessage = message => {
    const messages = { ...this.state.messages }
    const isMessage = true

    messages[`message-${Date.now()}`] = message
   

    this.setState({ messages, currentMessageUser: message, isMessage })
    this.verifResponseBot(message)
  }
  verifResponseBot(message) {
    const { BotsList } = this.allbots

   
    BotsList.map((item, index) =>
      item.options[message.message] ? setTimeout(() => { this.createMessageBot(item.name, item.options[message.message], item.avatar) }, 2000) : false
    )
    this.setState({ isMessage: false })
  }

  createMessageBot = (name, messagebot, avatar) => {
    const messages = { ...this.state.messages }

    const message = {
      id: String(Math.floor(Math.random() * Math.floor(10000))),
    
      avatar,
      message: messagebot,
      isUser: false,
      sentAt: Date.now()
    }

    messages[`message-${Date.now()}`] = message
    
    this.setState({ ...this.state.messages, messages })
  }


  componentDidUpdate() {
    setTimeout(() => { 
      const ref = this.messagesRef.current
      ref.scrollTop = ref.scrollHeight 
    }, 300)
  }

  render() {
    const nbmessages = Object.keys(this.state.messages).length
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition
          timeout={500}
          classNames='item'
          key={key}
        >
          <ViewMessage
            isUser={this.state.messages[key].isUser}
            avatar={this.state.messages[key].avatar}
            message={this.state.messages[key].message}
            id={this.state.messages[key].id}
            sentAt={this.state.messages[key].sentAt}
          />
        </CSSTransition>
      ))
    const { BotsList } = this.allbots
    return (
      <div>
        <Nav />
        <Box mt={3} >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={4} style={{backgroundColor: 'white' }}>
              <List>
                <Box pl={2} pr={2} >
                  {BotsList.map((item, index) =>
                    <Bots isMessage={this.state.isMessage} message={this.state.message} key={item.id} data={item} />
                  )}
                </Box>
              </List>
            </Grid>

            <Grid item xs={12} md={8} >
              <Paper square >
                <Box p={1} >
                  <Typography variant="h5" gutterBottom>
                    Réponses | ✉ {nbmessages} 
                  </Typography>
                </Box>
                <div className="box">
                  <div className="messages" ref={this.messagesRef}>
                    <TransitionGroup className="message">
                      {messages}
                    </TransitionGroup>
                  </div>
                </div>
              </Paper>
              <Box mt={2}>
                <SendMessage  addMessage={this.addMessage} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}

export default App;
