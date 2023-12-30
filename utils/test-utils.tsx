import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

type TestReduxWrapperProps = {
  children: React.ReactNode;
};

export const TestReduxWrapper = ({children}: TestReduxWrapperProps) => {
  const items = [
    {id: 'one', label: 'One'},
    {id: 'two', label: 'Two'},
  ];

  const initialState = {
    report: {
      availableDurations: items,
      selectedDuration: items[0],
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );
};
