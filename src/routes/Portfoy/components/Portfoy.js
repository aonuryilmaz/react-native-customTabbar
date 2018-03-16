import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Modal,AsyncStorage } from 'react-native';
import { Entypo,Ionicons } from '@expo/vector-icons';
import { CustomModal } from './CreateModal';
export default class Portfoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            post: { BTC: '', ETH: '', LTC: '', XRP: '', DASH: '', XMR: '' }
        }
    }
    _onPress = () => {
        const { navigate } = this.props.navigation;
        this.openModal();
    }
    async componentDidMount(){
        const list=await AsyncStorage.getItem('Portfoy');
    }
    openModal() {
        this.setState({ modalVisible: true })
    }
    closeModal=(e)=>{
        e.preventDefault()
        this.setState({ modalVisible: false });
    }
    submitButton =async (e) => {
        e.preventDefault();
        const list=JSON.stringify(this.state.post);
        await AsyncStorage.setItem('Portfoy',list);
        this.setState({modalVisible:false});
    }
    handleInputLot = (key, val) => {
        const post = Object.assign({}, this.state.post, { [key]:val });
        this.setState(Object.assign({}, this.state, { post }));
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    visible={this.state.modalVisible}
                    animationType='slide'
                    onRequestClose={this.closeModal}
                >
                    <CustomModal
                        handleInputLot={this.handleInputLot}
                        submit={this.submitButton}
                        close={this.closeModal}
                    />                  
                </Modal>
                <View style={styles.header}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textStyle}>Bittürk Portfoy</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this._onPress} style={{ alignItems: 'center', borderRadius: 5, backgroundColor: 'green', height: '100%', alignSelf: 'flex-end', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                                <Ionicons name="ios-add" size={24} color='white' />
                                <Text style={{ color: 'white', marginLeft: 1, marginRight: 1 }}>Yeni Portfoy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:5
    },
    header: {
        flexDirection: 'row',
        height: 50
    },
    textStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Courier-Bold' : 'monospace'
    }
})
