import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, Foundation, Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
    body: { flex: 1 },
    iconHeader: {
        flex: 38
    },
    bodyText: {
        flex: 1,
    },
    symbolHeader: {
        flex: 44
    },
    adHeader: {
        flex: 140
    },
    alisHeader: {
        flex: 88
    },
    satisHeader: {
        flex: 88
    },
    textStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Courier-Bold' : 'monospace'
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#bebfc0',
    }
})

export const Table = ({ list, isAccess }) => {
    const fontSizeHeader = isAccess && 10 || 16;
    return (
        <View>
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#e9ecef', alignItems: 'center' }}>
                {isAccess &&
                    <View
                        style={[styles.iconHeader, { alignItems: 'center' }]}
                    >
                        <Text style={[styles.textStyle,{ fontSize: fontSizeHeader }]}>Icon</Text>
                    </View>
                }
                {
                    isAccess &&
                    <View
                        style={[styles.symbolHeader, { alignItems: 'flex-start' }]}
                    >
                        <Text style={[styles.textStyle,{ fontSize: fontSizeHeader }]}>Symbol</Text>
                    </View>
                }
                <View
                    style={{ alignItems: 'flex-start', flex: isAccess && 140 || 1 }}
                >
                    <Text style={[styles.textStyle,{ fontSize: fontSizeHeader }]}>Ad</Text>
                </View>
                <View
                    style={{ alignItems: 'flex-end', flex: isAccess && 88 || 1 }}
                >
                    <Text style={[styles.textStyle,{ fontSize: fontSizeHeader }]}>Alış</Text>
                </View>
                <View
                    style={{ alignItems: 'flex-end', flex: isAccess && 88 || 1 }}
                >
                    <Text style={[styles.textStyle,{ fontSize: fontSizeHeader }]}>Satış</Text>
                </View>
            </View>
            <View style={styles.separator} />
            <ScrollView>
                {list.map((item) => {
                    return (
                        <View key={item.Ad}>
                            <TouchableOpacity style={{ flexDirection: 'row', height: 50, backgroundColor: '#e9ecef' }}>
                                {isAccess &&
                                    <View
                                        style={[styles.iconHeader, { height: '100%', alignItems: 'center', justifyContent: 'center' }]}
                                    >
                                        <Foundation name="bitcoin" size={24} />
                                    </View>
                                }
                                {
                                    isAccess &&
                                    <View
                                        style={[styles.symbolHeader, { height: '100%', alignItems: 'flex-start', justifyContent: 'center' }]}
                                    >
                                        <Text style={styles.textStyle}>{item.Symbol}</Text>
                                    </View>
                                }
                                <View
                                    style={{ height: '100%', alignItems: 'flex-start', justifyContent: 'center', flex: isAccess && 140 || 1 }}
                                >
                                    <Text style={styles.textStyle}>{item.Ad}</Text>
                                </View>
                                <View
                                    style={{ height: '100%', alignItems: 'flex-end', justifyContent: 'center', flex: isAccess && 88 || 1 }}
                                >
                                    <Text style={styles.textStyle}>{item.Alıs}</Text>
                                </View>
                                <View
                                    style={{ height: '100%', alignItems: 'flex-end', justifyContent: 'center', flex: isAccess && 88 || 1 }}
                                >
                                    <Text style={styles.textStyle}>{item.Satıs}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.separator} />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}