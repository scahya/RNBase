import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../Routes/NavigationHelper";
import { useAppDispatch } from "../app/hooks";
import { auth_LOGOUT, auth_SET_TOKEN } from "../redux/features/auth/authSlice";
import SafeScreen from "../component/Layout/SafeScreen";

const EmptyPage2 = () => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();
  return (
    // <SafeScreen>
    <View style={{ flex: 1 }}>
      <Text>EmptyPage2</Text>
      <View
        style={{
          backgroundColor: "red",
          opacity: 0.9,
          borderColor: "pink",
          borderWidth: 1,
          borderRadius: 10,
          marginTop: 20,
          width: "80%",
          height: "10%",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          style={{ padding: 5 }}
          onPress={() => {
            dispatch(auth_LOGOUT());
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            {"Unauthenticate MEE!!"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </SafeScreen>
  );
};

export default EmptyPage2;
