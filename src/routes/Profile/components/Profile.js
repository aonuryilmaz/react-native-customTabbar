import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {Button} from 'native-base';
import {WebBrowser} from 'expo';
import LoginForm from './LoginForm';
const { width, height } = Dimensions.get('window');
export default class Profile extends Component {
    state = {
        result: null,
      };
    _handlePressButtonAsync=async ()=>{
        let result=await WebBrowser.openBrowserAsync('https://bitturk.com/register');
        this.setState({ result });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.headerText}>
                        <Text style={{ color: '#4d3a5f', fontSize: 25 }}>
                            OTURUM AÇ
                        </Text>
                    </View>
                    <View style={styles.loginForm}>
                        <LoginForm />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button onPress={this._handlePressButtonAsync} style={{ width: width*0.6, alignItems: 'center', padding: 3, borderRadius: 5, backgroundColor: '#17B21D', justifyContent: 'center' }}>
                            <Text style={{ color: 'white',fontWeight:'bold',fontSize:15 }}>Ücretsiz Hesap Oluştur</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    loginForm: {
        width: width * (5 / 6),
        backgroundColor: 'white',
        borderRadius: 5
    },
    headerText: {
        height: 50,
        justifyContent: 'center'
    }
})