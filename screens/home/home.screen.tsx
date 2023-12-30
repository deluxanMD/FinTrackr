import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import HomeTopBar from '../../components/home-top-bar/home-top-bar.component';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeTopBar />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    marginTop: Platform.OS === 'ios' ? 50 : 0,
  },
});
