import React, { Component } from 'react'
import { Modal, Text,TextInput,Button, StyleSheet, View, TouchableHighlight } from 'react-native'
import Firebase from '../config.js';


export default class SignupScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleModalPopUp = (err) => {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={true}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                    <View>
                        <Text>{err}</Text>

                        <TouchableHighlight>
                            <Text>Dismiss</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>
            </View>
        )
    }
    handleSignUp = () => {
        const {
            email,
            password
        } = this.state
        console.log(email);
        console.log(password);
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Dashboard'))
            .catch(error => console.log(error))
        console.log("Complete");
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.labels}>Email: </Text>
                <TextInput autoCapitalize='none' style={styles.inputs} onChangeText={(email)=>this.setState({email})}/>
                <Text style={styles.labels}>Password: </Text>
                <TextInput secureTextEntry={true} autoCapitalize='none' style={styles.inputs} onChangeText={(password)=>this.setState({password})}/>

                <Button style={styles.loginButton} title="Signup" onPress={this.handleSignUp}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    loginButton: {
        borderRadius: 20,
        backgroundColor: "lightblue",
        width: 200,
    },
    labels: {
        margin: 10,
    },
    inputs: {
        borderColor: "black",
        borderWidth: 1,
        width: 200,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});