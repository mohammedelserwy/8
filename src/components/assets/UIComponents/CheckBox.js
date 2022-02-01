import * as React from "react";
import { View, StyleSheet, I18nManager ,TouchableWithoutFeedback} from "react-native";
import { L } from "../../../Config";
import styles, {
  primaryColor,
  secondaryColor,
  theme,
  wp,
} from "../styles/Styles";
import { VectorIcon } from "./VectorIcon";

const CheckBox = (props) => {
  const onPress = props.onPress;
  const value = props.value;
  const size = props.size;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          ...styles.checkBoxContainer,
          backgroundColor: value === true ? primaryColor : "#f7f7f7",
          width: wp(size ? size : 7),
          height: wp(size ? size : 7),
        }}
      >
        <VectorIcon
          name="check"
          type="Feather"
          style={{
            color: value === true ? "#fff" : "#f7f7f7",
            fontSize: wp(size ? Number(size - 2) : 5),
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export { CheckBox };
