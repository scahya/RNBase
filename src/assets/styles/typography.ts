// FONT FAMILY
export const FONT_FAMILY_ARIAL_REGULAR = "Arial";
// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_MEDIUM = "600";
export const FONT_WEIGHT_BOLD = "700";
export const FONT_WEIGHT_EXTRA_BOLD = "900";

import { Platform, TextStyle } from "react-native";
import { moderateScale } from "react-native-size-matters";

// FONT SIZE

export const FONT_SIZE_10 =
  Platform.OS == "ios" ? moderateScale(9) : moderateScale(8);
export const FONT_SIZE_12 =
  Platform.OS == "ios" ? moderateScale(10) : moderateScale(9);
export const FONT_SIZE_13 =
  Platform.OS == "ios" ? moderateScale(11) : moderateScale(10);
export const FONT_SIZE_14 =
  Platform.OS == "ios" ? moderateScale(12) : moderateScale(11);
export const FONT_SIZE_15 =
  Platform.OS == "ios" ? moderateScale(13) : moderateScale(12);
export const FONT_SIZE_16 =
  Platform.OS == "ios" ? moderateScale(14) : moderateScale(13);
export const FONT_SIZE_17 =
  Platform.OS == "ios" ? moderateScale(15) : moderateScale(14);
export const FONT_SIZE_18 =
  Platform.OS == "ios" ? moderateScale(16) : moderateScale(15);
export const FONT_SIZE_20 =
  Platform.OS == "ios" ? moderateScale(17) : moderateScale(16);
export const FONT_SIZE_22 =
  Platform.OS == "ios" ? moderateScale(20) : moderateScale(19);
export const FONT_SIZE_24 =
  Platform.OS == "ios" ? moderateScale(23) : moderateScale(21);
export const FONT_SIZE_29 =
  Platform.OS == "ios" ? moderateScale(28) : moderateScale(26);
export const FONT_SIZE_32 =
  Platform.OS == "ios" ? moderateScale(31) : moderateScale(29);
export const FONT_SIZE_36 =
  Platform.OS == "ios" ? moderateScale(34) : moderateScale(33);
export const FONT_SIZE_38 =
  Platform.OS == "ios" ? moderateScale(36) : moderateScale(35);
export const FONT_SIZE_40 =
  Platform.OS == "ios" ? moderateScale(38) : moderateScale(37);

// FONT STYLE
//Bold
export const FONT_AUIB_12: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_12,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_AUIB_14: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_14,
  fontWeight: FONT_WEIGHT_EXTRA_BOLD,
};

export const FONT_AUIB_15: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_15,
  fontWeight: FONT_WEIGHT_EXTRA_BOLD,
};

export const FONT_AUIB_16: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_16,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_AUIB_17: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_17,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_AUIB_18: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_18,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_AUIB_20: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_20,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_AUIB_22: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_22,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const FONT_AUIB_24: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_24,
  fontWeight: FONT_WEIGHT_BOLD,
};

//Regular

export const FONT_AUIR_10: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_10,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_12: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_12,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_14: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_14,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_15: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_15,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_16: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_16,
  fontWeight: FONT_WEIGHT_REGULAR,
};
export const FONT_AUIR_17: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_17,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_18: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_18,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_20: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_20,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_22: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_22,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_AUIR_24: TextStyle = {
  fontFamily: FONT_FAMILY_ARIAL_REGULAR,
  fontSize: FONT_SIZE_24,
  fontWeight: FONT_WEIGHT_REGULAR,
};
