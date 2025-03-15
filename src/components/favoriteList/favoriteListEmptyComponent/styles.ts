import {appColors, fontSize} from '../../../constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: appColors.primary,
    width: '85%',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  bottomTextContainer: {
    marginBottom: 120,
  },
  text: {
    color: appColors.background,
    fontSize: fontSize(17),
    textAlign: 'justify',
  },
});
