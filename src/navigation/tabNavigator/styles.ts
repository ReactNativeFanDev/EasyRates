import {Dimensions, StyleSheet} from 'react-native';
import {appColors} from '../../constants';

export const iconSize = Dimensions.get('screen').width * 0.04;

export const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: appColors.background,
    height: Dimensions.get('screen').height * 0.08,
  },
  tabBar: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  indicatorContainer: {
    height: '100%',
    position: 'absolute',
    left: 0,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  indicatorSquare: {
    backgroundColor: appColors.secondary,
    width: iconSize * 3,
    height: iconSize * 3,
    borderRadius: (iconSize * 1.7) / 2,
  },
});
