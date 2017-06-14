import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import io from 'socket.io-client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

StatusBar.setHidden(true);

const defaultState = {
  username: null,
  arrUsername: [],
  arrMessage: [],
  socket: null
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'SET_SOCKET') return { ...state, socket: action.socket };
  if (action.type === 'ACCEPT_USERNAME') return {  ...state, username: action.username };
  if (action.type === 'SET_LIST_USERNAME') return {  ...state, arrUsername: action.arrUsername };
  return state;
}

const store = createStore(reducer);

export default class SocketDemo extends Component {
  componentDidMount() {
      const socket = io('http://localhost:3000');
      store.dispatch({ type: 'SET_SOCKET', socket });
      socket.on('ACCEPT_USERNAME', 
        username => store.dispatch({ type: 'ACCEPT_USERNAME', username }));
      socket.on('LIST_USER_ONLINE', 
        arrUsername => store.dispatch({ type: 'SET_LIST_USERNAME', arrUsername }));
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('SocketDemo', () => SocketDemo);
