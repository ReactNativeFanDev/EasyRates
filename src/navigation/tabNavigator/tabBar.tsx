import React, {useEffect, useState} from 'react';
import {Dimensions, View, Animated} from 'react-native';
import {styles} from './styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default function CurrencyTabBar(props: BottomTabBarProps) {
  const {state, descriptors, navigation} = props;
  const tabNum = state.routes.length;
  const [indicatorPosition] = useState(new Animated.Value(0));

  const handleTabPress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  useEffect(() => {
    Animated.spring(indicatorPosition, {
      toValue: state.index * (SCREEN_WIDTH / tabNum),
      useNativeDriver: true,
      damping: 20,
      stiffness: 200,
    }).start();
  }, [state.index, indicatorPosition, tabNum]);

  return (
    <View style={styles.tabBarContainer}>
      <Animated.View
        style={[
          styles.indicatorContainer,
          {
            width: SCREEN_WIDTH / tabNum,
            transform: [{translateX: indicatorPosition}],
          },
        ]}>
        <View style={styles.indicatorSquare} />
      </Animated.View>

      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const TabIcon = options.tabBarIcon;

          const iconColor = isFocused
            ? options.tabBarActiveTintColor ?? 'red'
            : options.tabBarInactiveTintColor ?? 'red';

          return (
            <View
              key={route.key}
              style={styles.tabItem}
              onTouchEnd={() => handleTabPress(route.name)}>
              {TabIcon && (
                <TabIcon
                  focused={isFocused}
                  color={iconColor}
                  size={SCREEN_WIDTH * 0.08}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
