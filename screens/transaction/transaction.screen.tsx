import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TransactionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TransactionScreen</Text>
    </View>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
