import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {appColors, fontSize} from '../../constants';
import ExchangeSvg from '../../assets/svg/exchangeSvg';
import FavoriteSvg from '../../assets/svg/favoriteSvg';
import HeaderLeftRate from '../../components/navigation/headerLeft';
import HeaderRightRate from '../../components/navigation/headerRight';

export const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: appColors.secondary0,
  tabBarInactiveTintColor: appColors.secondary500,
};

export const exchangeRateOptions: BottomTabNavigationOptions = {
  tabBarIcon: ExchangeSvg,
  title: 'Exchange Rate',
  headerShown: true,
  headerStyle: {
    backgroundColor: appColors.secondary800,
  },
  headerTintColor: appColors.secondary0,
  headerTitleStyle: {
    fontSize: fontSize(14),
    textTransform: 'uppercase',
  },
  headerTitleAlign: 'center',
  headerLeft: HeaderLeftRate,
  headerRight: HeaderRightRate,
};

export const favoriteListOptions: BottomTabNavigationOptions = {
  tabBarIcon: FavoriteSvg,
  title: 'Favorite',
};
