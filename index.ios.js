import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import io from 'socket.io-client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

const defaultState = {
  username: null,
  arrMessage: [],
  socket: null
};

const reducer = (state = defaultState, action) => {
  if (action.type === 'SET_SOCKET') return { ...state, socket: action.socket };
  return state;
}

const store = createStore(reducer);

export default class SocketDemo extends Component {
  componentDidMount() {
      const socket = io('http://localhost:3000');
      store.dispatch({ type: 'SET_SOCKET', socket });
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
