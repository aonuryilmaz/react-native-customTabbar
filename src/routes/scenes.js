import React from 'react';
import {Image,View,Text} from 'react-native';
import {CustomTabBar} from '../components/HeaderComponent/';
import { StackNavigator, DrawerNavigator, DrawerItems, TabNavigator, Header } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, Entypo, Foundation, Feather } from '@expo/vector-icons';

import HomeContainer from './Home/containers/HomeContainer';
import Home from './Home/components/Home';
import Portfoy from './Portfoy/components/Portfoy';
import Profile from './Profile/components/Profile';
import Trade from './Trade/components/Trade';

const Coin=()=>(
    <View>
        <Text>Coin</Text>
    </View>
)

const Process=()=>(
    <View>
        <Text>Process</Text>
    </View>
)

export const RouterTab=TabNavigator({
    Home:{
        screen:Home,  
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:({tintcolor})=> <Ionicons name="ios-home-outline" size={32} />            
        }      
    },
    Trade:{
        screen:Trade,
        navigationOptions:{
            tabBarLabel:'Trade',
            tabBarIcon:({tintcolor})=> <MaterialCommunityIcons name="coin" size={32} />          
        }    
    },
    Process:{
        screen:Portfoy,
        navigationOptions:{
            tabBarLabel:'Process',
            tabBarIcon:({tintcolor})=> <Entypo name="bucket" size={32} />           
        }    
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon:({tintcolor})=> <Feather name="user" size={32} />          
        }    
    }
},{
    initialRouteName:'Home',
    animationEnabled:true,
    tabBarComponent:props=><CustomTabBar {...props} />,
    tabBarPosition:'top',
    swipeEnabled:true,
    tabBarOptions:{
        showIcon:true,
        activeTintColor:'white',
        inactiveTintColor:'#000'
    }
});

export const Router=StackNavigator({
    Home:{
        screen:RouterTab
    }
},{
    initialRouteName:'Home',
    headerMode:'none'    
});
