// @flow
import * as React from "react";
import { View, TextInput as NativeTextInput, StyleSheet } from "react-native";

import Text from "./Text";
import { TextStyle, ViewStyle } from "./styles";
import ExtraText from "./ExtraText";
import type { Props as ExtraTextProps } from "./ExtraText";

const defaultStyles = StyleSheet.create({
  // reset default padding of android device.
  textInput: {
    padding: 0,
    margin: 0,
  },
});

export type Props = ExtraTextProps & {
  style?: TextStyle,
  containerStyle?: ViewStyle,

  value?: string,
  onChangeText?: (text: string) => void,
};

function TextInput(props: Props, ref?) {
  const {
    style,
    containerStyle,
    error,
    errorStyle,
    option,
    optionStyle,
    ...rest
  } = props;

  const flattedErrorStyle = StyleSheet.flatten(errorStyle);
  const errorColor = flattedErrorStyle && flattedErrorStyle.color;
  return (
    <View style={containerStyle}>
      <NativeTextInput
        {...rest}
        ref={ref}
        style={[
          defaultStyles.textInput,
          style,
          error && errorColor ? { borderBottomColor: errorColor } : null,
        ]}
        underlineColorAndroid="transparent"
      />
      <ExtraText
        error={error}
        errorStyle={errorStyle}
        option={option}
        optionStyle={optionStyle}
      />
    </View>
  );
}

// $FlowFixMe
export default React.forwardRef(TextInput);
