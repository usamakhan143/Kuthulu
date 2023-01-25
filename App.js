import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import AppNavigationContainer from './src/navigator/NavigatorContainer';

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => SplashScreen.hide(), 2000);
    return () => clearTimeout(timer);
  }, []);

  return <AppNavigationContainer />;
};

export default App;
