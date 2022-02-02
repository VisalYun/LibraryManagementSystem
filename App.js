import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';

import MainView from './src/views/main';
import AuthView from './src/views/auth/auth';

const App = () => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };
  }, []);

  const [isLogin, setIsLogin] = useState(false);

  return ( isLogin ?
    <MainView /> :
    <AuthView setIsLogin={setIsLogin} />
  );
};

export default App;
