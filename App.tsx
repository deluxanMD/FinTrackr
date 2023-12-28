import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <View>
      <Text testID="Counter.Text">Counter: {counter}</Text>
      <Button
        title="Increment"
        onPress={handleIncrement}
        testID="Increment.Button"
      />
    </View>
  );
};

export default App;
