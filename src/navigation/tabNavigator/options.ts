import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {appColors} from '../../constants';
import ExchangeSvg from '../../assets/svg/exchangeSvg';
import FavoriteSvg from '../../assets/svg/favoriteSvg';

export const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: appColors.primary,
  tabBarInactiveTintColor: appColors.secondary,
};

export const exchangeRateOptions: BottomTabNavigationOptions = {
  tabBarIcon: ExchangeSvg,
  title: 'Exchange Rate',
};

export const favoriteListOptions: BottomTabNavigationOptions = {
  tabBarIcon: FavoriteSvg,
  title: 'Favorite',
};
