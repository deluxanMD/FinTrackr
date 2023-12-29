import {render} from '@testing-library/react-native';
import App from '../App';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const TestComponent = () => {
  const initialState = {
    theme: {
      color: {
        primary: '#6002ee',
        secondary: '#ee0290',
        white: '#ffffff',
        black: '#000000',
        inactive: '#8c8c8c',
      },
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

describe('app', () => {
  test('should render', () => {
    render(<TestComponent />);
  });
});
