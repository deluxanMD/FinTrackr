import {render} from '@testing-library/react-native';
import DropDownList from '../../components/dropdown-list/dropdown-list.component';

type TestComponentProps = {
  subheader?: string;
};

const items = [
  {id: 'one', label: 'One'},
  {id: 'two', label: 'Two', icon: 'folder'},
];

const TestComponent = ({subheader}: TestComponentProps) => {
  return (
    <DropDownList
      items={items}
      selectedItem={items[0]}
      handleListItemSelection={() => jest.fn()}
      subheader={subheader}
    />
  );
};

describe('dropdown list', () => {
  it('should render', async () => {
    const {getByTestId} = render(<TestComponent subheader="test subheading" />);
    expect(getByTestId('DropDownList.Touchable.Open')).toBeDefined();
  });
});
