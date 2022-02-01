import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {PureComponent} from 'react';
import {Image, StatusBar, Text, View, ScrollView} from 'react-native';
import styles, {hp, lightBar, wp} from './assets/styles/Styles';
import * as NavigationActions from '../NavigationActions';

class Language extends PureComponent {
  async componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={lightBar} barStyle="dark-content" />
        <ScrollView>
          <Image
            source={require('./assets/images/launch_screen.webp')}
            resizeMode="cover"
            style={{width: wp(100), height: hp(90)}}
          />
        </ScrollView>
      </View>
    );
  }
}
export default Language;
