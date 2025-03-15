import {StyleSheet} from 'react-native';
import {appColors, fontSize} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  messageContainer: {
    backgroundColor: appColors.primary,
    width: '85%',
    padding: 20,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 200,
  },
  messageText: {
    color: appColors.background,
    fontSize: fontSize(17),
    textAlign: 'justify',
  },
});
