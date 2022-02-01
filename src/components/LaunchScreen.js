import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {PureComponent} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import styles, {hp, lightBar, wp} from './assets/styles/Styles';
import * as NavigationActions from '../NavigationActions';
import {changeLng} from '../Config';

class LaunchScreen extends PureComponent {
  async componentDidMount() {
    let lang = await AsyncStorage.getItem('language');
    if (lang) {
      changeLng(lang);
      // setTimeout(() => {
      //   NavigationActions.reset('Language');
      //  }, 1200);
    } else {
      setTimeout(() => {
        NavigationActions.reset('Language');
      }, 1200);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={lightBar} barStyle="dark-content" />
        <Image
          source={require('./assets/images/launch_screen.webp')}
          resizeMode="cover"
          style={{width: wp(100), height: hp(100)}}
        />
      </View>
    );
  }
}
export default LaunchScreen;
