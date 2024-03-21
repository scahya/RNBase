import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./Routes/RouteConfig";
import ProtectedRoute from "./Routes/ProtectedRoutes";
import UnprotectedRoute from "./Routes/UnprotectedRoutes";
import { load } from "./utils/local_storage";
import { useAppDispatch } from "./app/hooks";
import { auth_LOGOUT, auth_SET_TOKEN } from "./redux/features/auth/authSlice";

const Stack = createNativeStackNavigator();

const protectedRoutes = routes
  .filter((route) => route.protected)
  .map((route) => (
    <Stack.Screen
      key={route.id}
      name={route.path}
      options={{ headerShown: false }}
    >
      {() => <ProtectedRoute>{route.element}</ProtectedRoute>}
    </Stack.Screen>
  ));

const unprotectedRoutes = routes
  .filter((route) => !route.protected)
  .map((route) => (
    <Stack.Screen
      key={route.id}
      name={route.path}
      options={{ headerShown: false }}
    >
      {() => <UnprotectedRoute>{route.element}</UnprotectedRoute>}
    </Stack.Screen>
  ));

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const getToken = () => {
    // mount the stored token from storage to redux slice
    load("TOKEN").then((token) => {
      dispatch(auth_SET_TOKEN({ token: token, refreshToken: token }));
      if (token === null) {
        dispatch(auth_LOGOUT());
      }
    });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {protectedRoutes}
        {unprotectedRoutes}
      </Stack.Navigator>
    </NavigationContainer>
    // <View
    //   style={{ flex: 1, backgroundColor: "green", height: 100, width: 100 }}
    // ></View>
  );
};

export default AppRouter;
