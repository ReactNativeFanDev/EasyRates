import {Dimensions, Platform, StyleSheet} from 'react-native';
import {appColors, fontSize} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '94%',
    backgroundColor: appColors.secondary800,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    backgroundColor:
      Platform.OS === 'ios' ? appColors.secondary900 : appColors.background,
    width: Dimensions.get('screen').width * 0.12,
    height: Dimensions.get('screen').width * 0.12,
    shadowColor: appColors.secondary0,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: Dimensions.get('screen').width * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: appColors.secondary0,
    fontSize: fontSize(12),
  },
  iconImage: {
    width: Dimensions.get('screen').width * 0.05,
    height: Dimensions.get('screen').width * 0.05,
  },
  detailsContainer: {
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWithWidth: {
    color: appColors.secondary0,
    fontSize: fontSize(12),
    width: Dimensions.get('screen').width * 0.3,
  },
  text: {
    color: appColors.secondary0,
    fontSize: fontSize(12),
  },
  divider: {
    height: '100%',
    width: 2,
    backgroundColor: appColors.secondary500,
    marginLeft: 5,
    marginRight: 20,
  },
  horizontalDivider: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: appColors.secondary500,
    height: 2,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  onPress: {
    opacity: 0.75,
  },
});
