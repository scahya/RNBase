import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from './RouteHelper';

const UnProtectedRoute = ({children}: {children: any}) => {
  const authenticated = false;
  const navigation = useNavigation<NavigationProps>();
  if (authenticated) {
    return navigation.navigate('home');
  }

  return children;
};

export default UnProtectedRoute;
