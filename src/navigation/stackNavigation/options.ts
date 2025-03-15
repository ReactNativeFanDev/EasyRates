import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {appColors, fontSize} from '../../constants';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const screenOptionsModal: NativeStackNavigationOptions = {
  presentation: 'modal',
  headerStyle: {backgroundColor: appColors.secondary800},
  headerTintColor: appColors.secondary0,
  title: 'Select a rate to compare currencies',
};

export const CurrentCurrencyOptions: NativeStackNavigationOptions = {
  animation: 'fade_from_bottom',
  title: 'Exchange Rate',
  headerShown: true,
  headerStyle: {
    backgroundColor: appColors.secondary800,
  },
  headerTintColor: appColors.secondary0,
  headerTitleStyle: {
    fontSize: fontSize(14),
  },
  headerTitleAlign: 'center',
  headerBackTitle: 'Back',
};
