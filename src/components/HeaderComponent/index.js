import React from 'react';
import {
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Dimensions,
    Image,
    Text,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, Foundation, Feather } from '@expo/vector-icons';
import StatusBar from '../StatusBar/';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const widthIcon = Dimensions.get("screen").width;
const bittrukIcon = require("../../utils/icon/BitturkLogo.png");

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: APPBAR_HEIGHT,
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 12,
    },
    logo: {
        marginTop: 2,
        height: 20,
        width: widthIcon * 0.3
    },
    headerItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: APPBAR_HEIGHT - 3,
        borderRadius: 5,
    },
    activeButton: {
        backgroundColor: 'white'
    }
});
export const CustomTabBar = ({ navigation,
    navigationState,
    activeTintColor,
    inactiveTintColor,
    renderIcon,
    getLabel }) => {
    return (
        <View>
            <StatusBar
                backgroundColor="#000"
                barStyle="light-content"
            />
            <View style={styles.container}>
                <View style={{ flexGrow: 0.2 }} >
                    <Image source={bittrukIcon} style={styles.logo} />
                </View>
                {navigationState.routes.map((route, idx) => {
                    const color = navigationState.index === idx ? inactiveTintColor : activeTintColor;
                    return (
                        <TouchableOpacity
                            activeOpacity={2}
                            style={[styles.headerItems, navigationState.index === idx && styles.activeButton]}
                            onPress={() => { navigation.navigate(route.routeName) }}
                            key={route.routeName}
                        >
                            <Text style={{ color: color }}>
                                {renderIcon({ route })}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
}