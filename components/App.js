import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    sendMessageToServer() {
        this.props.socket.emit('SEND_MESSAGE', this.state.text);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
                <TextInput 
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={this.sendMessageToServer.bind(this)}>
                    <Text>Send to server</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 30, 
        backgroundColor: 'white', 
        marginHorizontal: 20,
        paddingHorizontal: 10
    },
    button: {
        margin: 20,
        padding: 10,
        backgroundColor: 'pink'
    }
});

function mapStateToProps(state) {
    return { socket: state.socket };
}

export default connect(mapStateToProps)(App);
