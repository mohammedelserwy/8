import React from 'react';
import {View, ActivityIndicator, Modal, Text, Image} from 'react-native';

import styles, {primaryColor, wp} from '../styles/Styles';
// import { L } from "../../../Config";

const Spinner = ({type}) => {
  return (
    <View style={styles.spinnerContainer}>
      <View
        style={[
          {
            marginTop: 0,
            overflow: 'hidden',
            width: wp(20),
            height: wp(20),
            borderRadius: wp(3),
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <ActivityIndicator animating color={primaryColor} size={'large'} />
      </View>
    </View>
  );
};

export {Spinner};
