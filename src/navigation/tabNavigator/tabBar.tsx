import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {styles} from './styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default function CurrencyTabBar(props: BottomTabBarProps) {
  const {state, descriptors, navigation} = props;
  const tabNum = state.routes.length;
  const indicatorPosition = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: indicatorPosition.value}],
  }));

  const handleTabPress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  useEffect(() => {
    indicatorPosition.value = withSpring(
      state.index * (SCREEN_WIDTH / tabNum),
      {
        damping: 20,
        stiffness: 200,
      },
    );
  }, [state.index, indicatorPosition, tabNum]);

  return (
    <View style={styles.tabBarContainer}>
      <Animated.View
        style={[
          styles.indicatorContainer,
          animatedStyle,
          {width: Dimensions.get('screen').width / tabNum},
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
                  size={SCREEN_WIDTH * 0.1}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
