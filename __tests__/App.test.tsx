import {render} from '@testing-library/react-native';
import App from '../App';
import {TestReduxWrapper} from '../utils/test-utils';

describe('app', () => {
  test('should render', async () => {
    await render(
      <TestReduxWrapper>
        <App />
      </TestReduxWrapper>,
    );
  });
});
