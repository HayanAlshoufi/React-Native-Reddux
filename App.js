import {View, Text} from 'react-native';
import React from 'react';
// import Counter from './src/components/Counter';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Counter from './src/components/Counter';
const App = () => {
  return (
    <View>
      <Provider store={store}>
        <Text>App</Text>
        <Counter/>
      </Provider>
    </View>
  );
};

export default App;
