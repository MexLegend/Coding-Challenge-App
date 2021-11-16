import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import { Navigation } from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

interface AppProps {
  navigation: any;
  setTodo: any;
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;