import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit/react';

export type AvailableItem = {id: string; label: string; icon?: string};

export type AvailableItems = AvailableItem[];

export type Report = {
  availableDurations: AvailableItems;
  selectedDuration: AvailableItem;
};

const initialState: Report = {
  availableDurations: [
    {id: 'today', label: 'Today', icon: 'calendar'},
    {id: 'yesterday', label: 'Yesterday', icon: 'calendar'},
    {id: 'this_week', label: 'This Week', icon: 'calendar'},
    {id: 'this_month', label: 'This Month', icon: 'calendar'},
    {id: 'this_year', label: 'This Year', icon: 'calendar'},
  ],
  selectedDuration: {id: 'today', label: 'Today', icon: 'calendar'},
};

export const ReportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setSelectedDuration: (state, action: PayloadAction<AvailableItem>) => {
      state.selectedDuration = action.payload;
    },
  },
});

export const {setSelectedDuration} = ReportSlice.actions;
export default ReportSlice.reducer;
