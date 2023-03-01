import {View, Text,Button,StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
// import Counter from './src/components/Counter';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Counter from './src/components/Counter';
import Test from './test'
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(()=>{
    setTimeout(()=>{SplashScreen.hide();},3000)
    
  });
  return (
    <View style={styles.App}>
      <Provider store={store}>
        <Test/>
        <Counter/>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  App:{
    margin:10,
  },
});

export default App;
