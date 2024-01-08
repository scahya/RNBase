import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../Routes/RouteHelper';

const EmptyPage2 = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <Text>EmptyPage2</Text>
      <TouchableOpacity onPress={() => navigation.navigate('login')}>
        <Text>navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyPage2;
