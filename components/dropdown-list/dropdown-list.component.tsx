import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AvailableItem, AvailableItems} from '../../redux/report/report.slice';
import {Text} from 'react-native-paper';
import DropdownListModal from './dropdown-list-modal.component';

export type DropDownListProps = {
  subheader?: string;
  items: AvailableItems;
  selectedItem: AvailableItem;
  handleListItemSelection: (item: AvailableItem) => void;
};

const DropDownList = (props: DropDownListProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPressIn={() => setModalVisible(true)}
      testID="DropDownList.Touchable.Open">
      <Text style={styles.text}>{props.selectedItem.label}</Text>
      <FontAwesome name="angle-down" size={16} />
      <DropdownListModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        {...props}
      />
    </TouchableOpacity>
  );
};

export default DropDownList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 5,
  },
});
