import * as React from 'react';
import {View, StyleSheet, I18nManager,TouchableWithoutFeedback} from 'react-native';
import {L} from '../../../Config';
import styles, {
  primaryColor,
  secondaryColor,
  theme,
  wp,
} from '../styles/Styles';
import {VectorIcon} from './VectorIcon';

const Radio = props => {
  const onPress = props.onPress;
  const value = props.value;
  const selectedVal = props.selectedVal;
  const size = props.size;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          borderWidth: 2,
          borderColor: value === selectedVal ? primaryColor : '#b9b9b9',
          width: wp(size ? size : 5),
          height: wp(size ? size : 5),
          borderRadius: wp(size ? size : 5),
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: wp(2),
        }}>
        <View
          style={{
            backgroundColor:
              value === selectedVal ? primaryColor : 'transparent',
            width: wp(size ? Number(size - 2.8) : 2.8),
            height: wp(size ? Number(size - 2.8) : 2.8),
            borderRadius: wp(size ? Number(size - 2.8) : 2.8),
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export {Radio};
