import {StyleSheet} from 'react-native';
import {appColors, fontSize} from '../../../constants';

export const styles = StyleSheet.create({
  rateItemContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: appColors.secondary800,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currencyText: {
    color: appColors.secondary0,
    fontSize: fontSize(14),
  },
  pressedStyle: {
    opacity: 0.8,
  },
});
