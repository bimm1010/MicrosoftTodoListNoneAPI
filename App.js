import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/stack/MainStack';
import Provider from './src/reducer/provider/Provider';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
