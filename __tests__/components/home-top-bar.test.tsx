import {render} from '@testing-library/react-native';
import HomeTopBar from '../../components/home-top-bar/home-top-bar.component';
import {TestReduxWrapper} from '../../utils/test-utils';

const TestComponent = () => {
  return (
    <TestReduxWrapper>
      <HomeTopBar />
    </TestReduxWrapper>
  );
};

describe('home top bar', () => {
  it('should render', () => {
    const {getByTestId} = render(<TestComponent />);
    expect(getByTestId('HomeTopBar')).toBeDefined();
  });

  //   it('should handle open and close', async () => {
  //     const {getByTestId, queryByTestId, findByTestId} = render(
  //       <TestComponent />,
  //     );
  //     const dropDownList = await findByTestId('DropDownList.Touchable.Open');
  //     const modal = await findByTestId('DropdownList.Modal.Container');
  //     const closeIcon = await findByTestId('DropdownList.Modal.Close');

  //     //   open modal
  //     fireEvent(dropDownList, 'press');
  //     expect(modal).toBeOnTheScreen();

  //     await waitFor(() => {
  //       // close modal
  //       screen.debug();
  //       fireEvent(closeIcon, 'press');
  //       expect(modal).toBeOnTheScreen();
  //     });
  //   });
});
