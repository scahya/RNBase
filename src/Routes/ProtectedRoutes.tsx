import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {NavigationProps} from './RouteHelper';
import {useAppSelector} from '../app/hooks';

const ProtectedRoute = ({children}: {children: any}) => {
  const authenticatedUser = useAppSelector(state => state.auth.isAuthenticated);
  const authenticatedToken = useAppSelector(state => state.auth.auth_token);
  const authenticated = false;
  const navigation = useNavigation<NavigationProps>();

  if (!authenticated) {
    return navigation.navigate('login');
  }

  return children;
};

export default ProtectedRoute;
