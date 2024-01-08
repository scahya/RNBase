import { Dimensions, PixelRatio } from "react-native";

import deviceInfo from "react-native-device-info";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const referencePhone = {
  name: "phone",
  width: 360,
  height: 645,
};

const isTablet = deviceInfo.isTablet();

const widthComparedByReference = (width: number) => {
  const diff = screenWidth / referencePhone.width / (isTablet ? 1.33 : 1);

  // if you not using pt unit, you can delete convertPTtoPX
  return PixelRatio.roundToNearestPixel(width * diff);
};

const heightComparedByReference = (height: number) => {
  const diff = screenHeight / referencePhone.height;

  // if you not using pt unit, you can delete convertPTtoPX
  return PixelRatio.roundToNearestPixel(height * diff);
};

const widthComparedByReferencePercentage = (width: number) => {
  const diff = screenWidth / referencePhone.width / (isTablet ? 1.33 : 1);
  const percent = (referencePhone.width / 100) * width;

  // if you not using pt unit, you can delete convertPTtoPX
  return PixelRatio.roundToNearestPixel(percent * diff);
};

const heightComparedByReferencePercentage = (height: number) => {
  const diff = screenHeight / referencePhone.height;
  const percent = (referencePhone.height / 100) * height;

  // if you not using pt unit, you can delete convertPTtoPX
  return PixelRatio.roundToNearestPixel(percent * diff);
};

export {
  isTablet,
  widthComparedByReference,
  heightComparedByReference,
  widthComparedByReferencePercentage,
  heightComparedByReferencePercentage,
};
