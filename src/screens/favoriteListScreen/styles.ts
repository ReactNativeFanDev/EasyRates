import {StyleSheet} from 'react-native';
import {appColors, fontSize} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.background,
  },
  sectionHeaderContainer: {
    backgroundColor: appColors.primary,
    width: '70%',
    alignSelf: 'center',
    borderRadius: 18,
  },
  sectionHeaderText: {
    color: appColors.secondary0,
    fontSize: fontSize(18),
    textAlign: 'center',
    paddingVertical: 10,
  },
});
