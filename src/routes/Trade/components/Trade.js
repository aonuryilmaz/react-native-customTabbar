import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import Form from './Form';
import { Button } from 'native-base';

const { width, height } = Dimensions.get('window');

export default class Trade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: 'Alis'
        }
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: 5 }}>
                <Form />
                <View style={{ height: 40, alignSelf:'center',borderRadius:5,width:width*0.94,flexDirection: 'row', borderWidth: 1, borderColor: '#4286f4' }}>
                    <View style={{ flex: 1, marginRight: 1 }}>
                        <TouchableOpacity
                            onPress={() => { this.setState({ isActive: 'Alis' }) }}
                            style={[styles.segmentButton, this.state.isActive === 'Alis' && { backgroundColor: '#4286f4' }]}>
                            <Text style={this.state.isActive === 'Alis' && { fontWeight: 'bold', color: 'white' }}>Alış Emirleri</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, marginRight: 1 }}>
                        <TouchableOpacity
                            onPress={() => { this.setState({ isActive: 'Satis' }) }}
                            style={[styles.segmentButton, this.state.isActive === 'Satis' && { backgroundColor: '#4286f4' }]}>
                            <Text style={this.state.isActive === 'Satis' && { fontWeight: 'bold', color: 'white' }} >Satış Emirleri</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { this.setState({ isActive: 'Gecmis' }) }}
                            style={[styles.segmentButton, this.state.isActive === 'Gecmis' && { backgroundColor: '#4286f4' }]}>
                            <Text style={this.state.isActive === 'Gecmis' && { fontWeight: 'bold', color: 'white' }} >İşlem Geçmişi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    segmentButton: {
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

/**
 *  
 */