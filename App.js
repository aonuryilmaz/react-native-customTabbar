import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo,{AppLoading} from 'expo';
import Root from './src/main';

export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state={isReady:false};
  }
  async componentWillMount(){
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({isReady:true});
  }
  render() {
    if(!this.state.isReady){
      return <AppLoading/>
    }
    return <Root {...this.props} />;   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
