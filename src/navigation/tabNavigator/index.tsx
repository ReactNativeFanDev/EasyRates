import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Routes} from './types';
import ExchangeRateScreen from '../../screens/exchangeRateScreen';
import FavoriteListScreen from '../../screens/favoriteListScreen';
import {
  exchangeRateOptions,
  favoriteListOptions,
  screenOptions,
} from './options';
import TabBar from './tabBar';

const Tab = createBottomTabNavigator();

const renderTabBar = (props: BottomTabBarProps) => <TabBar {...props} />;

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={renderTabBar}>
      <Tab.Screen
        name={Routes.ExchangeRateScreen}
        component={ExchangeRateScreen}
        options={exchangeRateOptions}
      />
      <Tab.Screen
        name={Routes.FavoriteListScreen}
        component={FavoriteListScreen}
        options={favoriteListOptions}
      />
    </Tab.Navigator>
  );
}
