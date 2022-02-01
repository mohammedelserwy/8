import React from 'react';
import {View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import styles, {primaryColor, wp} from './components/assets/styles/Styles';

import LaunchScreen from './components/LaunchScreen';
import Language from './components/Language';

const Stack = createStackNavigator();

export default function RouterNavigator(props) {
  const lang = props.lang;
  return (
    <Stack.Navigator
      initialRouteName="LaunchScreen"
      screenOptions={{
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerBackTitle: '',
        headerTruncatedBackTitle: '',
        headerTitleAlign: 'center',
        headerBackTitleStyle: {color: primaryColor},
        headerTintColor: primaryColor,
        headerStatusBarHeight: wp(8),
      }}>
      <Stack.Screen
        name="LaunchScreen"
        component={LaunchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
