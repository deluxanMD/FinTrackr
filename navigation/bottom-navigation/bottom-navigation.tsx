import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../screens/home/home.screen';
import TransactionScreen from '../../screens/transaction/transaction.screen';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import FontAwesome6Icons from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.disabled}
      labeled={false}
      barStyle={{backgroundColor: theme.colors.background}}>
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcons name="home" color={color} size={26} />
          ),
        }}
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
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
