import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Spinner, Left } from 'native-base';
import {WebBrowser} from 'expo';
import { EvilIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false,result:null};
    _handlePressButtonAsync=async ()=>{
        let result=await WebBrowser.openBrowserAsync('https://bitturk.com/forgot-password');
        this.setState({ result });
    }
    onLoginPress() {
    }
    render() {
        return (
            <View>
                <Form style={{ paddingRight: 10 }}>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            returnKeyType='done'
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Şifre</Label>
                        <Input
                            returnKeyType='done'
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry
                            value={this.state.password}
                            autoCorrect={false}
                        />
                    </Item>
                </Form>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <View style={styles.buttonStyle}>
                    <Button style={{ width: width * (3 / 5), alignItems: 'center', justifyContent: 'center', backgroundColor: '#fa962d', borderRadius: 5 }}
                        onPress={this.onLoginPress.bind(this)} >
                        <Text style={styles.buttonTextStyle}>Oturum Aç</Text>
                    </Button>
                </View>
                <View style={{ height: 40, flexDirection: 'column', marginTop: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this._handlePressButtonAsync}>
                            <Text>Şifremi Unuttum</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
    buttonStyle: {
        alignItems: 'center',
        alignSelf: 'center',
    }
};
