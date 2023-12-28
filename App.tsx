import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/home/home.screen';
import TransactionScreen from './screens/transaction/transaction.screen';
import {Theme} from './helpers/theme';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import FontAwesome6Icons from 'react-native-vector-icons/FontAwesome6';

type AppProps = {
  theme: Theme;
};

const Tab = createMaterialBottomTabNavigator();

const App = (props: AppProps) => {
  const {primary, inactive, white} = props.theme.color;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={primary}
      inactiveColor={inactive}
      labeled={false}
      barStyle={{backgroundColor: white}}>
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcons name="home" color={color} size={26} />
          ),
        }}
        {...props}
      />
      {/* Transaction Screen */}
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontistoIcons name="arrow-swap" color={color} size={26} />
          ),
        }}
        {...props}
      />
      {/* Budget Screen */}
      <Tab.Screen
        name="Budget"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6Icons name="chart-simple" color={color} size={26} />
          ),
        }}
        {...props}
      />
      {/* Profile Screen */}
      <Tab.Screen
        name="Profile"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome6Icons name="user" color={color} size={26} />
          ),
        }}
        {...props}
      />
    </Tab.Navigator>
  );
};

export default App;
