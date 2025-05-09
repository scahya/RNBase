import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { FONT_AUIB_16 } from "../../assets/styles/typography";
import { PRIMARY } from "../../assets/styles/colors";
import { ColorValue } from "react-native";
import { TextProps } from "@rneui/base";

export interface ButtonProps extends TouchableOpacityProps {
  title: String;
  backgroundColor?: ColorValue;
  titleColor?: ColorValue;
}

const Button = (props: ButtonProps) => {
  const { onPress, title, backgroundColor, titleColor } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      // disabled={}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : PRIMARY,
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
        borderColor: PRIMARY,
        borderWidth: 1,
      }}
    >
      <Text
        style={[FONT_AUIB_16, { color: titleColor ? titleColor : "white" }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
