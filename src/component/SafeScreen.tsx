import {StatusBar} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

function SafeScreen({children}: Readonly<PropsWithChildren>) {
  return (
    <SafeAreaView style={[{backgroundColor: 'white', flex: 1}]}>
      <StatusBar barStyle={'light-content'} />
      {children}
    </SafeAreaView>
  );
}

export default SafeScreen;
