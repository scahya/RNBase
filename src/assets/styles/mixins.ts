import { Dimensions, PixelRatio, Platform } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;

const fontScale = PixelRatio.getFontScale();
const guidelineBaseWidth = 400;

export const scaleSize = (size: any) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: any) => {
  const newSize = size / fontScale;

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export function boxShadow(
  color: any,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
