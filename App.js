import React, {useEffect} from 'react';
import {LogBox} from 'react-native';

import MainView from './src/views/main';

const App = () => {
  // LogBox.ignoreLogs([
  //   'Non-serializable values were found in the navigation state',
  // ]);
  LogBox.ignoreAllLogs(); // Ignore log notification by message

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };
  }, []);

  return (
    <MainView />
  );
};

export default App;
