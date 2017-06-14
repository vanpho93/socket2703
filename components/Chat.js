import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import SignIn from './SignIn';
import { connect } from 'react-redux';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    sendMessage() {
        const { text } = this.state;
        this.props.socket.emit('CLIENT_SEND_MESSAGE', text);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>My Username: {this.props.username}</Text>
                <ScrollView style={{ height: 100 }}>
                    {this.props.arrUsername.map(e => <Text key={e}>{e}</Text>)}
                </ScrollView>
                <TextInput 
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    style={styles.input}
                />
                <TouchableOpacity onPress={this.sendMessage.bind(this)}>
                    <Text>Send</Text>
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
    return { username: state.username, arrUsername: state.arrUsername, socket: state.socket };
}

export default connect(mapStateToProps)(Chat);
