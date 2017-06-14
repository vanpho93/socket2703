import React, { Component } from 'react';
import { View } from 'react-native';
import SignIn from './SignIn';
import Chat from './Chat';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return this.props.username ? <Chat /> : <SignIn />;
    }
}

function mapStateToProps(state) {
    return { username: state.username };
}

export default connect(mapStateToProps)(App);
