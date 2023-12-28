import {render, screen, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('app', () => {
  test('should render', () => {
    render(<App />);

    const button = screen.getByTestId('Increment.Button');

    expect(screen.getByText('Counter: 0')).toBeDefined();
    fireEvent(button, 'press');
    expect(screen.getByText('Counter: 1')).toBeDefined();
  });
});
