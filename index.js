/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7F3DFF',
    secondary: 'yellow',
  },
};

const Root = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
