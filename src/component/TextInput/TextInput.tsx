import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input, InputProps } from "@rneui/base";
import { FONT_AUIB_16, FONT_AUIR_16 } from "../../assets/styles/typography";
import { scaleSize } from "../../assets/styles/mixins";
import { SECONDARY, WHITE_BACKGROUND } from "../../assets/styles/colors";

export interface TextInput {}

const TextInput = (props: InputProps) => {
  const {
    value,
    onChangeText,
    secureTextEntry,
    label,
    placeholder,
    rightIcon,
    containerStyle,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={{ backgroundColor: WHITE_BACKGROUND, marginTop: scaleSize(16) }}
    >
      <Input
        label={isFocused || value?.length! > 1 ? label : ""}
        onFocus={() => {
          setIsFocused(!isFocused);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={SECONDARY}
        labelStyle={[
          {
            paddingLeft: scaleSize(8),
            paddingTop: scaleSize(8),
            color: SECONDARY,
          },
          FONT_AUIB_16,
        ]}
        autoCapitalize={"none"}
        inputContainerStyle={{
          borderBottomWidth: 0,
          paddingLeft: 8,
          borderRadius: 8,
        }}
        containerStyle={
          containerStyle ?? {
            borderRadius: scaleSize(10),
            backgroundColor: WHITE_BACKGROUND,
            marginTop: scaleSize(10),
          }
        }
        renderErrorMessage={false}
        inputStyle={[FONT_AUIR_16]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        // leftIcon={}
        rightIcon={rightIcon}
      />
    </View>
  );
};

export default TextInput;
