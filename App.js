import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Routes from '~/routes';
import { colors, dimensions } from '~/constants';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-medium': require('assets/fonts/Roboto-Medium.ttf'),
    'roboto-regular': require('assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('assets/fonts/Roboto-Bold.ttf'),
  });
};

const App = () => {
  const [loadingAssets, setLoadingAssets] = useState(true);

  return (
    <>
      <View style={s.statusBar} />
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={s.safeAreaView}>
        {loadingAssets
          ? <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setLoadingAssets(false)}
          />
          : <Routes />}
      </SafeAreaView>
    </>
  )
}

const s = StyleSheet.create({
  safeAreaView: {
    backgroundColor: colors.background,
    alignSelf: 'stretch',
    flex: 1,
  },

  statusBar: {
    height: dimensions.statusBarHeight,
    backgroundColor: colors.dark,
  },
})

export default App;