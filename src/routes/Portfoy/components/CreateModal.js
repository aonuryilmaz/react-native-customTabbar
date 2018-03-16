import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Platform, Modal, TextInput, ScrollView } from 'react-native';
import { Item, Text, Label, Input, Button, Content } from 'native-base';

export const CustomModal = ({ handleInputLot, submit, close }) => {
    return (
        <View style={styles.container}>
            <Content>
                <View style={{ height: 50, width: '100%',justifyContent:'center',alignItems:'center' }}>
                    <Text>Portfoy Ekle</Text>
                </View>
                <View style={styles.seperator} />
                <View style={styles.header}>
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                        <Text>Symbol</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Lot</Text>
                    </View>
                </View>
                <View style={styles.seperator} />
                <View style={styles.content}>
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                        <Text>BTC</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Input
                            onChangeText={text => handleInputLot('BTC', text)}
                            keyboardType='numeric'
                            returnKeyType='done'
                            placeholder="0"
                            style={{ width: '90%', textAlign: 'center', height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 0.5 }}
                        />
                    </View>
                </View>
                <View style={styles.seperator} />
                <View style={styles.content}>
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                        <Text>ETH</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Input
                            onChangeText={text => handleInputLot('ETH', text)}
                            keyboardType='numeric'
                            returnKeyType='done'
                            placeholder="0"
                            style={{ width: '90%', textAlign: 'center', height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 0.5 }}
                        />
                    </View>
                </View>
                <View style={styles.seperator} />
                <View style={styles.content}>
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                        <Text>LTC</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Input
                            onChangeText={text => handleInputLot('LTC', text)}
                            keyboardType='numeric'
                            returnKeyType='done'
                            placeholder="0"
                            style={{ width: '90%', textAlign: 'center', height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 0.5 }}
                        />
                    </View>
                </View>
                <View style={styles.seperator} />
                <View style={styles.content}>
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                        <Text>XRP</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Input
                            onChangeText={text => handleInputLot('XRP', text)}
                            keyboardType='numeric'
                            returnKeyType='done'
                            placeholder="0"
                            style={{ width: '90%', textAlign: 'center', height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 0.5 }}
                        />
                    </View>
                </View>
                <View style={styles.seperator} />
                <View style={styles.content}>
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                        <Text>DASH</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Input
                            onChangeText={text => handleInputLot('DASH', text)}
                            keyboardType='numeric'
                            returnKeyType='done'
                            placeholder="0"
                            style={{ width: '90%', textAlign: 'center', height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 0.5 }}
                        />
                    </View>
                </View>
                <View style={styles.seperator} />
                <View style={styles.content}>
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
                        <Text>XMR</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Input
                            onChangeText={text => handleInputLot('XMR', text)}
                            keyboardType='numeric'
                            returnKeyType='done'
                            placeholder="0"
                            style={{ width: '90%', textAlign: 'center', height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 0.5 }}
                        />
                    </View>
                </View>
            </Content>
            <View style={{ flexDirection: 'row',height:60 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{height:'100%'}} onPress={close} full danger>
                        <Text>İptal</Text>
                    </Button>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{height:'100%'}} onPress={submit} full success>
                        <Text>Kaydet</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flexDirection: 'row',
        height: 50
    },
    header: {
        height: 50,
        flexDirection: 'row'
    },
    seperator: {
        height: 1,
        width: '100%',
        backgroundColor: '#bebfc0',
    }
});