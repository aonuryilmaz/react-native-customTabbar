import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Entypo, Foundation, Feather } from '@expo/vector-icons';

export const Portfoy = ({ isAccess, list }) => {
    const fontSizeHeader = isAccess && 10 || 16
    return (
        <View>
            <View style={styles.header}>
                {isAccess &&
                    <View style={{ flex: 38, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.textStyle, { fontSize: fontSizeHeader }]}>Icon</Text>
                    </View>
                }
                <View style={{ flex: isAccess && 88 || 8, flexDirection: 'column', height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.textStyle, { fontSize: fontSizeHeader }]}>Symbol</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.textStyle, { fontSize: fontSizeHeader }]}>Lot</Text>
                    </View>
                </View>
                {isAccess &&
                    <View style={{ flex: 100, height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={[styles.textStyle, { fontSize: fontSizeHeader }]}>Ad</Text>
                    </View>
                }
                <View style={{ flex: isAccess && 88 || 8, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Text style={[styles.textStyle, { fontSize: fontSizeHeader }]}>Fiyat</Text>
                </View>
                <View style={{ flex: isAccess && 60 || 6, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Text style={[styles.textStyle, { fontSize: fontSizeHeader }]}>Toplam</Text>
                </View>
            </View>
            <View style={styles.separator} />
            {list.map((item) => {
                return (
                    <View key={item.Ad}>
                        <View style={styles.body}>
                            {isAccess &&
                                <View style={{ flex: 38, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Foundation name="bitcoin" size={24} />
                                </View>
                            }
                            <View style={{ flex: isAccess && 88 || 8, flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={styles.textStyle}>{item.Symbol}</Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={styles.textStyle}>{item.Lot}</Text>
                                </View>
                            </View>
                            {isAccess &&
                                <View style={{ flex: 100, height: '100%', alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <Text style={styles.textStyle}>{item.Ad}</Text>
                                </View>
                            }
                            <View style={{ flex: isAccess && 88 || 8, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Text style={styles.textStyle}>{item.Fiyat}</Text>
                            </View>
                            <View style={{ flex: isAccess && 60 || 6, height: '100%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Text style={styles.textStyle}>{item.Toplam}</Text>
                            </View>
                        </View>
                        <View style={styles.separator} />
                    </View>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    headerRow: { flex: 1 },
    header: { flexDirection: 'row', height: 50, backgroundColor: '#e9ecef' },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#bebfc0',
    },
    body: { flexDirection: 'row', height: 50, backgroundColor: '#e9ecef' },
    textStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Courier-Bold' : 'monospace'
    }
});