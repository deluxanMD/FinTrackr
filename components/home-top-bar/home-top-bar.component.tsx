import {StyleSheet, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import DropDownList from '../dropdown-list/dropdown-list.component';
import {Avatar, useTheme} from 'react-native-paper';
import {
  AvailableItem,
  setSelectedDuration,
} from '../../redux/report/report.slice';

const HomeTopBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const report = useSelector((state: RootState) => state.report);

  const handleListItemSelection = (item: AvailableItem) => {
    dispatch(setSelectedDuration(item));
  };

  return (
    <View style={styles.container} testID="HomeTopBar">
      <Avatar.Image
        source={require('../../assets/images/profile_pic.webp')}
        size={26}
      />
      <DropDownList
        subheader="Select a duration"
        items={report.availableDurations}
        selectedItem={report.selectedDuration}
        handleListItemSelection={handleListItemSelection}
      />
      <FontAwesome name="bell" color={theme.colors.primary} size={20} />
    </View>
  );
};

export default HomeTopBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 999,
  },
});
