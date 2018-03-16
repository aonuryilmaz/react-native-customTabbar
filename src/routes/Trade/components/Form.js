import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Input, Item, Button } from 'native-base';

const { width, height } = Dimensions.get('window');

export const Form = () => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Miktar</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <Item style={styles.textInput}>
                        <Input placeholder="0,00000000" />
                        <Text>Coin</Text>
                    </Item>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Fiyat</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <Item style={styles.textInput}>
                        <Input placeholder="50,00" />
                        <Text>TL</Text>
                    </Item>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Toplam</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <Item style={styles.disabledInput}>
                        <Input disabled placeholder="0,00" />
                        <Text>TL</Text>
                    </Item>
                </View>
            </View>
            <View style={{ height: 50, flexDirection: 'row' }}>
                <View style={{ flex: 1 }} >
                    <Button full success >
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>AL</Text>
                    </Button>
                </View>
                <View style={{ flex: 1 }} >
                    <Button full info >
                        <Text style={{color:'white',fontWeight:'bold',fontSize:16}} >SAT</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    disabledInput: {
        backgroundColor: '#eee',
        borderRadius: 4,
        borderColor: '#e0e0e0',
        borderWidth:1,
    },
    textInput:{ 
        borderRadius:4,
        borderColor: '#e0e0e0',
        borderWidth:1,        
    }
})
export default Form;