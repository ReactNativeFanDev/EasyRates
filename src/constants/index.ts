import {RFValue} from 'react-native-responsive-fontsize';

export type AppColors = {
  background: string;
  primary: string;
  primary700: string;
  primaryTransparent: string;
  secondary0: string;
  secondary100: string;
  secondary500: string;
  secondary800: string;
  secondary900: string;
};

export const appColors: AppColors = {
  background: '#151718',
  primary: '#08d65c',
  primary700: '#07531a',
  primaryTransparent: '#002d0a',
  secondary0: '#FFFFFF',
  secondary100: '#bec3c2',
  secondary500: '#595c5b',
  secondary800: '#242627',
  secondary900: '#27292b',
};

export const fakeGrafData = [
  {value: 50},
  {value: 80},
  {value: 90},
  {value: 70},
  {value: 30},
  {value: 40},
  {value: 40},
  {value: 80},
];

export const fontSize = (props: number) => RFValue(props, 580);
