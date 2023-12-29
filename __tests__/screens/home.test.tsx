import {render} from '@testing-library/react-native';
import HomeScreen from '../../screens/home/home.screen';

describe('home screen', () => {
  it('should render', () => {
    render(<HomeScreen />);
  });
});
