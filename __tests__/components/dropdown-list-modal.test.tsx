import {render, waitFor} from '@testing-library/react-native';
import DropdownListModal from '../../components/dropdown-list/dropdown-list-modal.component';

type TestComponentProps = {
  subheader?: string;
};

const items = [
  {id: 'one', label: 'One'},
  {id: 'two', label: 'Two', icon: 'folder'},
];

const TestComponent = ({subheader}: TestComponentProps) => {
  return (
    <DropdownListModal
      items={items}
      selectedItem={items[0]}
      handleListItemSelection={() => jest.fn()}
      subheader={subheader}
      modalVisible={true}
      setModalVisible={() => jest.fn()}
    />
  );
};

describe('dropdown list modal', () => {
  it('should render without subheader', async () => {
    const {queryByTestId} = render(<TestComponent />);
    expect(queryByTestId('DropdownList.Modal')).toBeOnTheScreen();
    await waitFor(() => {
      expect(queryByTestId('DropDownList.Subheader')).toBeNull();
    });
  });

  it('should render with subheader', async () => {
    const {getByTestId} = render(<TestComponent subheader="test subheader" />);

    await waitFor(() => {
      expect(getByTestId('DropDownList.Subheader')).toHaveTextContent(
        'test subheader',
      );
    });
  });

  it('should display list items', async () => {
    const {queryAllByTestId} = render(<TestComponent />);

    await waitFor(() => {
      expect(queryAllByTestId('DropDownList.List.Item')).toHaveLength(2);
      expect(queryAllByTestId('DropDownList.List.Item')[0]).toHaveTextContent(
        'One',
      );
      expect(queryAllByTestId('DropDownList.List.Item')[1]).toHaveTextContent(
        'Two',
      );
    });
  });

  it('should display tick on selected item', async () => {
    const {queryAllByTestId} = render(<TestComponent />);
    const tickIcon = queryAllByTestId('DropDownList.List.Icon.Right')[0];

    await waitFor(() => {
      expect(tickIcon).toBeTruthy();
    });
  });

  it('should render modal invisible', () => {
    const {queryByTestId} = render(
      <DropdownListModal
        items={items}
        selectedItem={items[0]}
        handleListItemSelection={() => jest.fn()}
        modalVisible={false}
        setModalVisible={() => jest.fn()}
      />,
    );
    expect(queryByTestId('DropdownList.Modal')).not.toBeOnTheScreen();
  });
});
