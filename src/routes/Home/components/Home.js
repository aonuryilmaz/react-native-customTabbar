import React, { Component } from 'react';
import { View, StyleSheet, Platform, Text, TouchableOpacity, ScrollView, Dimensions, RefreshControl } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, Foundation, Feather } from '@expo/vector-icons';
import { Container, Content } from 'native-base';

import { Table } from './Table';
import { Portfoy } from './PortfoyList';

const tableData = [
    { Ad: 'Ethereum', Symbol: 'ETC', Satıs: '004.300,10', Alıs: '004.000,00' },
    { Ad: 'Ripple', Symbol: 'XRP', Satıs: '000.005,69', Alıs: '000.005,61' },
    { Ad: 'Litecoin', Symbol: 'LTC', Satıs: '000.805,00', Alıs: '000.705,00' },
    { Ad: 'Dash', Symbol: 'DASH', Satıs: '003.885,00', Alıs: '003.100,00' },
    { Ad: 'Monero', Symbol: 'XMR', Satıs: '001.400,00', Alıs: '001.200,00' },
];

const portfoyData = [
    { Ad: 'Ethereum', Symbol: 'ETC', Fiyat: '004.300,10', Lot: '0.10000000', Toplam: '430.00' },
    { Ad: 'Ripple', Symbol: 'XRP', Fiyat: '000.005,69', Lot: '700.00000000', Toplam: '360,45.00' },
    { Ad: 'Litecoin', Symbol: 'LTC', Fiyat: '000.805,00', Lot: '1.00000000', Toplam: '80.50' }
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAccess: Dimensions.get('window').width > 390 ? true : false,
            isAccessPortfoy: Dimensions.get('window').width > 415 ? true : false
        }
    }
    _onLayout = (e) => {
        const { width, height } = Dimensions.get('window');
        if (width > 390) {
            this.setState({ isAccess: true });
        } else {
            this.setState({ isAccess: false });
        }
        if (width > 415) {
            this.setState({ isAccessPortfoy: true });
        } else {
            this.setState({ isAccessPortfoy: false });
        }
    }
    render() {
        return (
            <ScrollView>
                <View onLayout={this._onLayout} style={styles.container}>
                    <View>
                        <View style={{height:50,justifyContent:'center',backgroundColor:'#fa962d',alignItems:'center'}}>
                            <Text style={styles.textStyle}>
                                BİTTÜRK PORTFÖYÜM
                            </Text>
                        </View>
                        <View style={styles.separator} />
                        <Portfoy list={portfoyData} isAccess={this.state.isAccessPortfoy} />
                    </View>
                    <View style={{marginTop:5}}>
                        <View style={{height:50,backgroundColor:'#fa962d',justifyContent:'center',alignItems:'center'}}>
                            <Text style={styles.textStyle}>
                                GÜNCEL PİYASA DURUMU
                            </Text>
                        </View>
                        <View style={styles.separator} />                        
                        <Table list={tableData} isAccess={this.state.isAccess} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, marginRight: 3, marginLeft: 3, marginTop: 5 },
    textStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Courier-Bold' : 'monospace',
        fontSize:18,
        color:'white',
        fontWeight:'bold'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#bebfc0',
    }
});