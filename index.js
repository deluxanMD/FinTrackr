/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './helpers/theme';

const Root = () => (
  <NavigationContainer>
    <App theme={theme} />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Root);
