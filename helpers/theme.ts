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

export const theme: Theme = {
  color: {
    primary: '#6002ee',
    secondary: '#ee0290',
    white: '#ffffff',
    black: '#000000',
    inactive: '#8c8c8c',
  },
};
