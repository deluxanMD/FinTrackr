import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Avatar, Card, List} from 'react-native-paper';
import {DropDownListProps} from './dropdown-list.component';

type DropDownListModalProps = DropDownListProps & {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

const DropdownListModal = ({
  items,
  selectedItem,
  subheader,
  handleListItemSelection,
  modalVisible,
  setModalVisible,
}: DropDownListModalProps) => {
  return (
    <View testID="DropdownList.Modal.Container">
      <Modal
        testID="DropdownList.Modal"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Card style={styles.modal}>
          <TouchableOpacity
            testID="DropdownList.Modal.Close"
            onPress={() => setModalVisible(false)}>
            <Avatar.Icon size={48} icon="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <List.Section>
            {!!subheader && (
              <List.Subheader testID="DropDownList.Subheader">
                {subheader}
              </List.Subheader>
            )}
            {items.map(item => (
              <TouchableOpacity
                key={item.id}
                disabled={item.id === selectedItem.id}
                onPress={() => {
                  handleListItemSelection(item);
                  setModalVisible(false);
                }}>
                <List.Item
                  title={item.label}
                  testID="DropDownList.List.Item"
                  left={() => (
                    <View testID="DropDownList.List.Icon.Left">
                      <List.Icon icon={item.icon ?? 'view-list'} />
                    </View>
                  )}
                  right={() =>
                    item.id === selectedItem.id && (
                      <View testID="DropDownList.List.Icon.Right">
                        <List.Icon icon={'check'} />
                      </View>
                    )
                  }
                />
              </TouchableOpacity>
            ))}
          </List.Section>
        </Card>
      </Modal>
    </View>
  );
};

export default DropdownListModal;

const styles = StyleSheet.create({
  modal: {
    top: '50%',
    height: '50%',
    elevation: 10,
  },
  closeIcon: {
    position: 'absolute',
    right: 5,
    top: -24,
  },
});
