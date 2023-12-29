import {createSlice} from '@reduxjs/toolkit';

type Color = {
  primary: string;
  secondary: string;
  white: string;
  black: string;
  inactive: string;
};

export type Theme = {
  color: Color;
};

const initialState: Theme = {
  color: {
    primary: '#6002ee',
    secondary: '#ee0290',
    white: '#ffffff',
    black: '#000000',
    inactive: '#8c8c8c',
  },
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    getColors: state => {
      state.color;
    },
  },
});

export const {getColors} = ThemeSlice.actions;
export default ThemeSlice.reducer;
