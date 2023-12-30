import {StatusBar} from 'react-native';
import BottomNavigation from './navigation/bottom-navigation/bottom-navigation';

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle={'dark-content'}
      />
      <BottomNavigation />
    </>
  );
};

export default App;
