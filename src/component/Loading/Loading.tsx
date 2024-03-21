import { Platform, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react-native";
import Modal from "react-native-modal";
import {
  heightComparedByReferencePercentage as HP,
  widthComparedByReference as wp,
} from "../../utils/responsive";
import { Text } from "@rneui/base";
interface MenuProps {
  loading: boolean;
}

const Loading = (props: MenuProps) => {
  const { loading } = props;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (loading === true) {
      setIsLoading(true);
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 940);
    }
  }, [loading]);

  return (
    <>
      {isLoading && (
        <Modal
          isVisible={isLoading}
          backdropOpacity={0.5}
          useNativeDriverForBackdrop={true}
          useNativeDriver={true}
          animationIn={"bounceIn"}
          animationOut={"bounceOut"}
          backdropColor={"rgba(0, 0, 0, 0.76)"}
          // style={{ flex: 1 }}
          deviceHeight={Platform.OS === "ios" ? HP(100) : HP(110)}
        >
          <View
            style={{
              backgroundColor: "white",
              width: wp(200),
              height: wp(210),
              borderRadius: wp(20),
              alignSelf: "center",
            }}
          >
            <Lottie
              autoPlay={true}
              source={require("../../assets/lottie/LoadingAnimation.json")}
              style={styles.wrapperLottie}
            />
            <Text
              style={[
                {
                  alignSelf: "center",
                  marginTop: "auto",
                  marginBottom: 20,
                },
              ]}
            >
              Please Wait....
            </Text>
          </View>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  lottieAnimationIos: {
    // marginLeft: scaleSize(40),
    // height: scaleSize(50),
  },
  wrapperLottie: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    // backgroundColor: "rgba(23,23,23,0.8)",
  },
});

export default Loading;
