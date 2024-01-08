import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type NavigatorParamList = {
  login: undefined;
  onboarding: undefined;
  home: undefined;
};

export type NavList = keyof Partial<NavigatorParamList>;
export type NavigationProps = NativeStackNavigationProp<NewNavList>;
type NewNavList = Partial<NavigatorParamList>;
