import {Dimensions, StyleSheet} from 'react-native';
import {appColors, fontSize} from '../../../constants';

const width = Dimensions.get('screen').width * 0.08;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 2,
    borderRadius: 12,
    backgroundColor: appColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginRight: Dimensions.get('screen').width * 0.025,
  },
  symbolText: {
    color: appColors.secondary0,
    fontSize: fontSize(14),
    fontWeight: '600',
  },
  currencyText: {
    fontSize: fontSize(10),
    color: appColors.secondary0,
  },
  onPress: {
    opacity: 0.75,
  },
});
