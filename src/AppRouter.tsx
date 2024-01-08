import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './Routes/RouteConfig';
import ProtectedRoute from './Routes/ProtectedRoutes';
import UnprotectedRoute from './Routes/UnprotectedRoutes';

const Stack = createNativeStackNavigator();

const protectedRoutes = routes
  .filter(route => route.protected)
  .map(route => (
    <Stack.Screen
      key={route.id}
      name={route.path}
      component={ProtectedRoute({children: route.element})}
      options={{headerShown: false}}
    />
  ));
const unprotectedRoutes = routes
  .filter(route => !route.protected)
  .map(route => (
    <Stack.Screen
      key={route.id}
      name={route.path}
      component={UnprotectedRoute({children: route.element})}
      options={{headerShown: false}}
    />
  ));

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {protectedRoutes}
        {unprotectedRoutes}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
