import React, { Component } from 'react'
import { Text,TextInput, StyleSheet, View, Button } from 'react-native'

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state= {
            usernameInput: "",
            passwordInput: "",
        }
    }
    checkLogin = (email,password) =>{
        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Profile'))
            .catch(error => console.log(error))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.labels}>Username: </Text>
                <TextInput style={styles.inputs} onChangeText={(u)=>this.setState({usernameInput:u})}/>
                <Text style={styles.labels}>Password: </Text>
                <TextInput secureTextEntry={true} style={styles.inputs} onChangeText={(p)=>this.setState({passwordInput:p})}/>

                <Button style={styles.loginButton} title="Login" onPress={() => this.checkLogin(this.state.usernameInput, this.state.passwordInput)}/>
                
                <Button style={styles.loginButton} title="Dont Have an account?" 
                onPress={() => {
                    this.props.navigation.navigate("Signup");
                    console.log("clicked");
                }}/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
        borderRadius: 20,
        backgroundColor: "lightblue",
        width:200,
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
 