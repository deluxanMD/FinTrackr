import {render} from '@testing-library/react-native';
import HomeScreen from '../../screens/home/home.screen';
import {TestReduxWrapper} from '../../utils/test-utils';

describe('home screen', () => {
  it('should render', async () => {
    await render(
      <TestReduxWrapper>
        <HomeScreen />
      </TestReduxWrapper>,
    );
  });
});
