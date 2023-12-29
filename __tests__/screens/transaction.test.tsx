import {render} from '@testing-library/react-native';
import TransactionScreen from '../../screens/transaction/transaction.screen';

describe('transaction screen', () => {
  it('should render', () => {
    render(<TransactionScreen />);
  });
});
