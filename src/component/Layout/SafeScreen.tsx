import {
  ColorValue,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { PropsWithChildren, Ref } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional bounces effect when the scroll reaches the end of the scrollable area.
   */
  bounces?: boolean;

  /**
   * An optional bounces effect horizontal scroll.
   */
  bounceHorizontal?: boolean;

  /**
   * An optional bounces effect vertical scroll.
   */
  bounceVertical?: boolean;

  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * An optional status bar setting. Defaults to light-content.
   */
  statusBar?: StatusBarStyle;
  statusBarColor?: ColorValue;
  statusBarInsets?: number;
  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: "handled" | "always" | "never";

  hasHeader?: boolean;

  scrollViewRef?: Ref<ScrollView>;
}

function SafeScreen(props: Readonly<ScreenProps>) {
  const style = props.style || {};
  const backgroundStyle = props.backgroundColor
    ? { backgroundColor: props.backgroundColor }
    : { backgroundColor: "black" };
  const insetStyle = { paddingBottom: 0 } as ViewStyle;

  return (
    <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
      <StatusBar barStyle={"dark-content"} />
      {props.children}
    </SafeAreaView>
  );
}

export default SafeScreen;
